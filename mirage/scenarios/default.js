export default function(server) {

  var territory = server.create('territory');
  server.createList('lawyer', 10, { territory, territoryId: territory.id });
 
  
  
}