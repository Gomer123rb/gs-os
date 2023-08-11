constructor (parameters) 
    
/// Read customer specific NavBar.json and Forms.json
// to redraw the navigation bar with the groups and forms
// required in this custom app.
// This code should typically be placed inside CustomerModule.js

// Wipe out existing nav bar with default Apex menu structure
$('#scrollNavBar').empty();

// Load our own customised NavBar.json and Forms.json

// Draw the navigation bar and menu items using HTML templates
TriSysApex.NavigationBar.Draw('scrollNavBar', true);

// End of Navigation Bar Refresh code snippet
getComputedStyle
 
2009