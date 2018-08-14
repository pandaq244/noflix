import * as React from 'react';
import { connect } from 'react-redux';


import { episodeQuery } from '../../../../api/query';


import './index.css';

interface IProps {
    episode: any,
    series: any,
    updateName: any
};


class SeriesDescription extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    };
    public async componentWillReceiveProps(props: IProps) {
        if(this.props.series.id!==props.series.id){    
            const queryData=Object(await episodeQuery(
                props.series.episodes[props.series.seasonNumber-1][props.series.episodeNumber-1].id
            ));
            const data=queryData.data();

            this.props.updateName({
                description: data.description,
                name: data.name
            });
        }
    };
    public render() {
        return(
            <div className="series-description">
                <span className="series-description--title">
                  {this.props.series.name}
                </span>
                <div className="series-description--summary">
                    <span className="">Season {this.props.series.seasonNumber},</span>
                    <span className="">Episode :{this.props.series.episodeNumber}</span>
                    <span className="">"{this.props.episode.name}"</span>
                </div>
                <div className="">
                   {this.props.series.description}
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateName: (data: any) => {
            dispatch({
                payload: {
                    description: data.description,
                    name: data.name
                },
                type: 'updateEpisodeInfo'
            });
        }
    };
};

const mapStateToProps = (state: any) => {
    return {
        episode: state.episode,
        series: state.series
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesDescription);