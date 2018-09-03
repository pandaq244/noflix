interface IBasic {
    minWidth?: number;
    maxWidth?: number;
};

export default interface IProps {
    default: IBasic;
    mobile: IBasic;
};
