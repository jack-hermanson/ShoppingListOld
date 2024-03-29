import React, {Fragment} from "react";
import {Item} from "../Item/Item";
import {Table} from "reactstrap";
import ItemModel from "../../../models/ItemModel";
import GroupModel from "../../../models/GroupModel";
import {LoadingSpinner} from "../../LoadingSpinner/LoadingSpinner";
import {useStoreState} from "../../../store";

interface Props {
    group: GroupModel;
}

export const GroupBody = ({group}: Props) => {

    const items = useStoreState(state => state.items?.filter(item => (
        item.groups.some(_group => _group.groupId === group.id)
    )));

    return (
        <Fragment>
            {items !== undefined
                ?
                <Table className="mb-0 same-width" striped>
                    <tbody>
                    {items.map((item: ItemModel) => (
                        <Item item={item} key={item.id}/>
                    ))}
                    </tbody>
                </Table>
                :
                <LoadingSpinner className="my-3"/>
            }
        </Fragment>
    );
};
