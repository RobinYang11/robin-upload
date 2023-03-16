/// <reference types="react" />
interface IUploadProps {
    url: string;
    name: string;
    onClick(): void;
}
declare function Upload(props: IUploadProps): JSX.Element;

export { Upload };
