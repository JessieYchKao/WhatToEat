import { Option } from "./option";

export interface DialogContent {
    title: string;
    visible: boolean;
    type?: Option;
}
