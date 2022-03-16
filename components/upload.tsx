import { FormElement, Input } from "@nextui-org/react";
import React, { FC, HTMLAttributes } from "react";

type UploadProps = {
  label: string;
} & HTMLAttributes<FormElement>;

const Upload: FC<UploadProps> = ({ label, onChange }) => {
  return (
    <div className="flex justify-center">
      <div className="mb-3 w-96">
        <Input underlined type="file" id="formFile" label={label} onChange={onChange} />
      </div>
    </div>
  );
};

export default Upload;
