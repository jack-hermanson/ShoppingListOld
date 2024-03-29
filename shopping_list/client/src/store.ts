import GroupModel from "./models/GroupModel";
import {action, Action, createStore, thunk, Thunk} from "easy-peasy";
import {createTypedHooks} from "easy-peasy";
import AlertModel from "./models/AlertModel";
import ItemModel from "./models/ItemModel";
import {deleteItem, editItem, getItems, ItemRequestModel, saveItem, toggleItemCheck} from "./api/items";
import {completeGroup, deleteGroup, editGroup, getGroups, saveGroup} from "./api/groups";
import {defaultNewItem} from "./components/ShoppingList/Item/utils";
import {getAlerts} from "./api/alerts";

interface StoreModel {
    groups: GroupModel[];
    setGroups: Action<StoreModel, GroupModel[]>;
    fetchGroups: Thunk<StoreModel>;
    saveGroup: Thunk<StoreModel, GroupModel>;
    toggleGroup: Action<StoreModel, number>;
    completeGroup: Thunk<StoreModel, number>
    editGroup: Thunk<StoreModel, GroupModel>;
    deleteGroup: Thunk<StoreModel, number>;

    items: ItemModel[] | null;
    setItems: Action<StoreModel, ItemModel[]>;
    fetchItems: Thunk<StoreModel>;
    editItem: Thunk<StoreModel, ItemModel>;
    deleteItem: Thunk<StoreModel, number>;
    saveItem: Thunk<StoreModel, ItemModel>;
    toggleItemCheck: Action<StoreModel, {itemId: number, checked: boolean}>;
    focusItem: ItemModel | null;
    setFocusItem: Action<StoreModel, ItemModel | null>;
    newItem: ItemModel;
    setNewItem: Action<StoreModel, ItemModel>;

    alerts: AlertModel[];
    setAlerts: Action<StoreModel, AlertModel[]>;
    fetchAlerts: Thunk<StoreModel>;
}

export const store = createStore<StoreModel>({
    groups: [],
    setGroups: action((state, payload) => {
        state.groups = payload;
    }),
    fetchGroups: thunk(async (actions) => {
        const res = await getGroups();
        actions.setGroups(res.sort((first: GroupModel, second: GroupModel) => {
            if (first.name === "Misc") return 1;
            if (second.name === "Misc") return -1;
            return 0;
        }));
    }),
    saveGroup: thunk(async (actions, payload) => {
        const startTime = Date.now();
        await saveGroup(payload);
        console.log(`New group created. Response time: ${timeDif(startTime)}s`);
        await actions.fetchGroups();
        await actions.fetchAlerts();
    }),
    toggleGroup: action((state, payload) => {
        state.groups = state.groups.map(group => {
            if (group.id !== payload) return group;
            group.visible = !group.visible;
            return group;
        });
    }),
    completeGroup: thunk(async (actions, payload) => {
        const startTime = Date.now();
        await completeGroup(payload);
        console.log(`Group completed. Response time: ${timeDif(startTime)}s`);
        await actions.fetchItems();
    }),
    editGroup: thunk(async (actions, payload) => {
        const startTime = Date.now();
        await editGroup(payload);
        console.log(`Group edited. Response time: ${timeDif(startTime)}s`);
        await actions.fetchGroups();
        await actions.fetchAlerts();
    }),
    deleteGroup: thunk(async (actions, payload) => {
        const startTime = Date.now();
        await deleteGroup(payload);
        console.log(`Group deleted. Response time: ${timeDif(startTime)}s`);
        await actions.fetchGroups();
        await actions.fetchItems();
        await actions.fetchAlerts();
    }),

    items: null,
    setItems: action((state, payload) => {
        state.items = payload;
    }),
    fetchItems: thunk(async (actions) => {
        const startTime = Date.now();
        const items = await getItems();
        console.log(`Retrieved ${items.length} items. Response time: ${timeDif(startTime)}s`);
        actions.setItems(items);
    }),
    editItem: thunk(async (actions, item) => {
        const newItem: ItemRequestModel = {
            ...item,
            groups: item.groups.map(group => group.groupId)
        };
        const startTime = Date.now();
        await editItem(newItem);
        console.log(`Item edited. Response time: ${timeDif(startTime)}s`);
        await actions.fetchItems();
        await actions.fetchAlerts();
    }),
    deleteItem: thunk(async (actions, itemId: number) => {
        const startTime = Date.now();
        await deleteItem(itemId);
        console.log(`Item deleted. Response time: ${timeDif(startTime)}s`);
        await actions.fetchItems();
        await actions.fetchAlerts();
    }),
    toggleItemCheck: action((state, payload) => {
        const startTime = Date.now();
        state.items = state.items!.map((item: ItemModel) => {
            if (item.id === payload.itemId) {
                item.checked = payload.checked;
                return item;
            }
            return item;
        });
        toggleItemCheck(payload.itemId, payload.checked).then(() => {
            console.log(`Item ${payload.checked ? "" : "un"}checked. Response time: ${timeDif(startTime)}s`);
        });
    }),
    focusItem: null,
    setFocusItem: action((state, payload) => {
        state.focusItem = payload;
    }),
    saveItem: thunk(async (actions, payload) => {
        const startTime = Date.now();
        const newItem: ItemRequestModel = {
            ...payload,
            groups: payload.groups.map(group => group.groupId)
        };
        await saveItem(newItem);
        console.log(`New item added. Response time: ${timeDif(startTime)}s`);
        await actions.fetchItems();
        await actions.fetchAlerts();
    }),
    newItem: defaultNewItem,
    setNewItem: action((state, payload) => {
        state.newItem = payload;
    }),

    alerts: [],
    setAlerts: action((state, payload) => {
        state.alerts = payload;
    }),
    fetchAlerts: thunk(async (actions) => {
        console.log("fetching alerts");
        const alerts = await getAlerts();
        actions.setAlerts(alerts);
    })
});

const timeDif = (originalTime: number) => {
    return (Date.now() - originalTime) / 1000;
}

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
