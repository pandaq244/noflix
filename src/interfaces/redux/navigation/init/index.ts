import IAction from '../../default/';

export interface INavigation {
    bookmark: number,
    options: string[]
};

export interface INavigationAction extends IAction {
    payload: number
};
