import { Input } from "@nextui-org/react";
import { FC } from "react";

type UploadProps = {
  label: string;
};

const Upload: FC<UploadProps> = ({ label }) => {
  return (
    <div className="flex justify-center">
      <div className="mb-3 w-96">
        <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">
          {label}
        </label>
        <Input underlined color="primary" type="file" id="formFile" />
      </div>
    </div>
  );
};

export default Upload;
