class EventConfigHelper {

    loadFromDomains(container, eventEmitter) {
        let eventConfig = this.getEventConfigFromDomains(container);
        for (let i in eventConfig) {
            if (eventConfig.hasOwnProperty(i)) {
                let func = eventConfig[i];
                func(container, eventEmitter);
            }
        }
    }

    getEventConfigFromDomains(domain) {
        let eventConfig = [];
        for (let domainName in domain) {
            if (domain.hasOwnProperty(domainName)) {
                let domainInstance = domain[domainName];
                if (domainInstance.config && typeof domainInstance.config.event === 'function') {
                    eventConfig.push(domainInstance.config.event);
                }
            }
        }
        return eventConfig;
    }
}

export default new EventConfigHelper();
