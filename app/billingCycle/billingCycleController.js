(function(){
    angular.module('primeiraApp').controller('BillingCycleCtrl',[  
        '$http',
        'msgs',
        BillingCycleController
    ])
    function BillingCycleController($http, msgs){
        const vm = this
        vm.create = function(){
            const url = 'http://localhost:3003/api/billingCycles'
            $http.post(url, vm.billingCycle).then(function(response){
                vm.billingCyle = {}
                msgs.addSuccess('Operação realizada com sucesso!')
                console.log('Sucesso!')
            }).catch(function(response){
                console.log('error', response)
                msgs.addError( response.data.errors )                
            })          
        }
    }
})()