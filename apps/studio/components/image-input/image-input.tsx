import { Imgix } from '@floyd/ui/components';
import { useState } from 'react';
import { services } from 'services';

interface Props {
  label: string;
  channelId: string;
  onValueChange: (value: string) => void;
  value: string;
}

export function ImageInput({ label, channelId, onValueChange, value }: Props) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(file: File) {
    try {
      setUploading(true);
      const path = await services.file.upload({ type: 'image', file, channelId });
      onValueChange(path);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <Imgix src={value} width={200} height={200} />
      <label>{label}</label>
      {uploading && <p>Uploading...</p>}
      <input type="file" onChange={(e) => handleUpload(e.target.files[0])} />
    </div>
  )
}
