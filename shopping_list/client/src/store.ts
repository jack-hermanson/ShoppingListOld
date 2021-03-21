import GroupModel from "./models/GroupModel";
import {action, Action, computed, Computed, createStore, thunk, Thunk} from "easy-peasy";
import axios from "axios";
import {createTypedHooks} from "easy-peasy";
import AlertModel from "./models/AlertModel";
import ItemModel from "./models/ItemModel";

interface StoreModel {
    groups: GroupModel[];
    setGroups: Action<StoreModel, GroupModel[]>;
    fetchGroups: Thunk<StoreModel>;
    addGroup: Action<StoreModel, GroupModel>;
    saveGroup: Thunk<StoreModel, GroupModel>;

    items: ItemModel[] | null;
    setItems: Action<StoreModel, ItemModel[]>;
    fetchItems: Thunk<StoreModel>;

    alerts: AlertModel[];
}

export const store = createStore<StoreModel>({
    groups: [],
    setGroups: action((state, payload) => {
        state.groups = payload;
    }),
    fetchGroups: thunk(async (actions) => {
        const res = await axios.get("/api/groups/");
        actions.setGroups(res.data);
    }),
    addGroup: action((state, payload) => {
        state.groups.push(payload);
    }),
    saveGroup: thunk(async (actions, payload) => {
        const res = await axios.post("/api/groups/", payload);
        actions.addGroup(res.data);
    }),

    items: null,
    setItems: action((state, payload) => {
        state.items = payload;
    }),
    fetchItems: thunk(async (actions) => {
        const res = await axios.get("/api/items/");
        actions.setItems(res.data);
    }),

    alerts: [],
});

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
