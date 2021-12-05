class EventConfigHelper {

    loadFromDomains(container, eventEmitter) {
        let eventConfig = this.getEventConfigFromDomains(container);

        for (let i in eventConfig) {
            if (eventConfig.hasOwnProperty(i)) {
                let func = eventConfig[i];
                func(container, eventEmitter);
            }
        }

        // console.log(eventConfig);
    }

    getEventConfigFromDomains(domain) {
        let eventConfig = [];
        for (let domainName in domain) {
            if (domain.hasOwnProperty(domainName)) {
                let domainInstance = domain[domainName];

                if (domainInstance.config && typeof domainInstance.config.event === 'function') {
                    //console.log(domainInstance.config.event);
                    eventConfig.push(domainInstance.config.event);
                    //Object.assign(eventConfig, domainInstance.config.event);
                }
            }
        }
        return eventConfig;
    }
}

export default new EventConfigHelper();
