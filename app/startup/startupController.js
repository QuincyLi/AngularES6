import startup from './startupModule'

export default startup.controller('startupController', startupController);

let startupController = () => {
    let vm = this;
    vm.firstName = 'johnny';
}