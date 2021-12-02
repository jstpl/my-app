class ReduceHelper {

    getReducersFromDomains(domain) {
        let reducers = {};
        for (let domainName in domain) {
            if (domain.hasOwnProperty(domainName)) {
                let domainInstance = domain[domainName];
                if(typeof domainInstance.reducers === 'object') {
                    Object.assign(reducers, domainInstance.reducers);
                }
            }
        }
        return reducers;
    }
}

export default new ReduceHelper();
