import CrudRpcRepository from "../../../packages/rpc/CrudRpcRepository";

let repositories = {
    rpc: {}
};

repositories.rpc.chat = new CrudRpcRepository('messenger-chat');
repositories.rpc.message = new CrudRpcRepository('messenger-message');

export default repositories;
