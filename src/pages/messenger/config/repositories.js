import CrudRpcRepository from "../../../packages/rpc/CrudRpcRepository";

let repositories = {
    chatRpc: new CrudRpcRepository('messenger-chat'),
    messageRpc: new CrudRpcRepository('messenger-message'),
};

export default repositories;
