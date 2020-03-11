import React from 'react';
import './block.css'
import { createBrowserHistory } from "history";
import { Link } from 'react-router-dom';


export default class Block extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            transactions: [],
        }
    }

    componentDidMount() {
        const history = createBrowserHistory();
        const blockID = history.location.pathname.split('/')[2];
        fetch(`/api/rawblock/${blockID}`).then(res => {
            // console.log('res---', res)
            return res.json()
        }).then(data => {
            console.log('data 🔥', data)
            this.setState({
                transactions: data.tx
            })
        })
    }

    render() {
        return(
        <div className="block">
            <div>All transactions of this block: </div>
            <ul>
            {
                this.state.transactions.map(tx => {
                    return (
                        <li className="block-li" key={tx.hash} >
                            Check Transaction: 
                            <Link to={`/transaction/${tx.hash}`}>
                                {tx.hash}
                            </Link>
                        </li>
                    )
                })
            }
            </ul>
        </div>
        )
    }
}