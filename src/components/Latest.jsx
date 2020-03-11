import React from 'react';
import { Link } from 'react-router-dom';

export default class Latest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            latestBlock: {}
        }
    }
    componentDidMount() {
        fetch('/api/latestblock').then( res => res.json() ).then(data => {
            // console.log('------', data.hash)
            this.setState({
                latestBlock: data
            })
        })
    }


    render() {
        return(
            <div className="latest"> 
                <span>Latest Block: </span>
                <Link to={`/block/${this.state.latestBlock.hash}`}>
                     {this.state.latestBlock.hash}
                </Link>
            </div>
        )
    }
}