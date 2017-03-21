function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      //controller: 'LayoutController'
  })
  .state('root.home',  {
      url: '/home',
      //template: `<p>Welcome to SafARI TAILS! Please excuse our site construction.</p>`,
      templateUrl: 'templates/home.tpl.html',
      controller: 'UserController'
  })
  .state('page-not-found', {
      url: '/not-found',
      template: `<h2>So sorry! Unable to find that URL.</h2>`
  })

    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
