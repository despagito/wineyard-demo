import React from 'react';
import './transaction.css'
import { createBrowserHistory } from "history";
import { Link } from 'react-router-dom';

export default class Transaction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: [],
            out: [],
        }
    }

    componentDidMount() {
        const history = createBrowserHistory();
        const transactionID = history.location.pathname.split('/')[2];
        
        fetch(`/api/rawtx/${transactionID}`).then(res => {
            return res.json()
        }).then(data => {
            console.log('data 🔥', data)
            this.setState({
                inputs: data.inputs,
                out: data.out,
            })
        })
    }

    render() {
        return(
        <div className="transaction">
            <ul>
            {
                this.state.inputs.map(entry => {
                    return (
                        <li className="block-li" key={entry.script}>
                            <div>Received {entry.prev_out.value} from {entry.prev_out.addr}</div>
                            {/* <Link to={`/transaction/${entry.prev_out.script}`}>
                                Check Transaction 
                            </Link> */}
                        </li>
                    )
                })
            }
            </ul>

            <ul>
            {
                this.state.out.map(entry => {
                    return (
                        <li className="block-li" key={entry.script}>
                            <div>Gave {entry.value} to {entry.addr}</div>
                            {/* <Link to={`/transaction/${entry.addr}`}>
                                Check Transaction 
                            </Link> */}
                        </li>
                    )
                })
            }
            </ul>
        </div>
        )
    }
}