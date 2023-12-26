function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/member/member.html',
        controller: 'skillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
};