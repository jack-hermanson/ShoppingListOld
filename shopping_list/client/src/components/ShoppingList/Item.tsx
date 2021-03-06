import React, {Component} from "react";
import ItemModel from "../../models/ItemModel";
import {Input} from "reactstrap";
import {FaInfoCircle} from "react-icons/fa";

interface Props {
    item: ItemModel;
}

export default class Item extends Component<Props, any> {

    render() {
        return (
            <tr>
                <td>
                    <div className="custom-control custom-checkbox">
                        <Input id={`checkbox_${this.props.item.id}`} type="checkbox" className="custom-control-input" />
                        <label htmlFor={`checkbox_${this.props.item.id}`} className="custom-control-label">{this.props.item.name}
                            {this.props.item.notes === ""
                                ? ""
                                : <small className="text-muted d-block">{this.props.item.notes}</small>
                            }
                        </label>
                    </div>
                </td>
                <td>
                    <FaInfoCircle />
                </td>
            </tr>
        );
    }

}