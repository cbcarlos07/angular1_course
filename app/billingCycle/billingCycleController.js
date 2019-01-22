(function(){
    angular.module('primeiraApp').controller('BillingCycleCtrl',[  
        '$http',
        'msgs',
        'tabs',
        BillingCycleController
    ])
    function BillingCycleController($http, msgs, tabs){
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'
        vm.refresh = function(){
           $http.get(url).then(function(response){
               vm.billingCycle = {}
               vm.billingCycle = response.data
               tabs.show(vm, {tabList: true, tabCreate: true})               
           }) 
        }

        vm.create = function(){
            
            $http.post(url, vm.billingCycle).then(function(response){
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!')
                console.log('Sucesso!')
            }).catch(function(response){
                console.log('error', response)
                msgs.addError( response.data.errors )                
            })          
        }
        vm.refresh()
    }
})()