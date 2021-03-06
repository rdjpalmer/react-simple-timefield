import React, { ChangeEvent, CSSProperties, ReactElement } from 'react';
declare type InputType = 'clock' | 'timer';
export declare function isNumber<T>(value: T): boolean;
export declare function formatTimeItem(value?: string | number): string;
export declare function validateTimeAndCursor({ showSeconds, value, defaultValue, colon, cursorPosition, inputType }: {
    showSeconds?: boolean | undefined;
    value?: string | undefined;
    defaultValue?: string | undefined;
    colon?: string | undefined;
    cursorPosition?: number | undefined;
    inputType?: string | undefined;
}): [string, number];
declare type onChangeType = (event: ChangeEvent<HTMLInputElement>, value: string) => void;
interface Props {
    value?: string;
    onChange?: onChangeType;
    showSeconds?: boolean;
    input?: ReactElement | null;
    inputRef?: () => HTMLInputElement | null;
    colon?: string;
    style?: CSSProperties | {};
    inputType?: InputType;
    [x: string]: unknown;
}
interface State {
    value: string;
    _colon: string;
    _defaultValue: string;
    _showSeconds: boolean;
    _maxLength: number;
}
export default class TimeField extends React.Component<Props, State> {
    static defaultProps: Props;
    constructor(props: Props);
    componentDidUpdate(prevProps: Props): void;
    onInputChange(event: ChangeEvent<HTMLInputElement>, callback: onChangeType): void;
    render(): ReactElement;
}
export {};
