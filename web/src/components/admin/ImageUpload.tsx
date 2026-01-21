'use client';

import { useState, ChangeEvent } from 'react';
import { supabase } from '@/lib/supabase';

interface ImageUploadProps {
    bucket: string;
    onUploadComplete: (url: string) => void;
    label?: string;
}

export default function ImageUpload({ bucket, onUploadComplete, label = "Upload Image" }: ImageUploadProps) {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        try {
            setUploading(true);
            setError(null);

            if (!event.target.files || event.target.files.length === 0) {
                return;
            }

            const file = event.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
            const filePath = `${fileName}`;

            // Upload the file
            const { error: uploadError } = await supabase.storage
                .from(bucket)
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            // Get public URL
            const { data } = supabase.storage
                .from(bucket)
                .getPublicUrl(filePath);

            onUploadComplete(data.publicUrl);
        } catch (err: any) {
            setError(err.message || 'Error uploading image');
            console.error('Upload error:', err);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
            <div className="flex items-center gap-4">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    disabled={uploading}
                    className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-lg file:border-0
                        file:text-sm file:font-semibold
                        file:bg-[#D4A646]/10 file:text-[#D4A646]
                        hover:file:bg-[#D4A646]/20
                        disabled:opacity-50 disabled:cursor-not-allowed"
                />
                {uploading && (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#D4A646]"></div>
                )}
            </div>
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
}
