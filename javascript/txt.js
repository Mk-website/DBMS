
//-------------------------------------------------
/*
let iframe = document.getElementById('iframe');
    function loadLinkInIframe(link) {
        iframe.src = link;
    }
    function searchProgram() {
    let searchInput = document.getElementById('search-input').value;

    // Program names and their corresponding links
    const programLinks = {
        'Array 01': 'Arrays/Arr1.html',
        'Array 02': 'Arrays/Arr2.html',
        'Array 3': 'Arrays/Arr3.html',
        'Array 4': 'Arrays/Arr4.html',
        'Array 5': 'Arrays/Arr5.html',
        'Array 6': 'Arrays/Arr6.html',
        'Array 7': 'Arrays/Arr7.html',
        'Array 8': 'Arrays/Arr8.html',
        'Array 9': 'Arrays/Arr9.html',
        'Array 10':'Arrays/Arr10.html',
        'Array 11':'Arrays/Arr11.html',
        'Array 12':'Arrays/Arr12.html',
        'Array 13':'Arrays/Arr13.html',
        'Array 14':'Arrays/Arr14.html',
        'Array 15':'Arrays/Arr15.html',
        'Array 16':'Arrays/Arr16.html',
        'Array 17':'Arrays/Arr17.html',
        'Array 18':'Arrays/Arr18.html',
        'Array 19':'Arrays/Arr19.html',
        'Array 20':'Arrays/Arr20.html',
        '2d 01':'2DArray/Arr1.html',
        '2d 02':'2DArray/Arr2.html',
        '2d 3': '2DArray/Arr3.html',
        '2d 4': '2DArray/Arr4.html',
        '2d 5': '2DArray/Arr5.html',
        '2d 6': '2DArray/Arr6.html',
        '2d 7': '2DArray/Arr7.html',
        'string 01':'String/str1.html',
        'string 02':'String/str2.html',
        'string 3': 'String/str3.html',
        'string 4': 'String/str4.html',
        'string 5': 'String/str5.html',
        'string 6': 'String/str6.html',
        'string 7': 'String/str7.html',
        'string 8': 'String/str8.html',
        'string 9': 'String/str9.html',
        'string 10':'String/str10.html',
        'string 11':'String/str11.html',
        'string 12':'String/str12.html',
        'string 13':'String/str13.html',
        'string 14':'String/str14.html',
        'string 15':'String/str15.html',
        'string 16':'String/str16.html',
        'string 17':'String/str17.html',
        'string 18':'String/str18.html',
        'string 19':'String/str19.html',
        'string 20':'String/str20.html',
        'string 21':'String/str21.html',
        'string 22':'String/str22.html',
        'string 23':'String/str23.html',
        'string 24':'String/str24.html',
        'string 25':'String/str25.html',
        'string 26':'String/str26.html',
        'string 27':'String/str27.html',
        'string 28':'String/str28.html',
        'string 29':'String/str29.html',
        'stack 01':'Stack/Stack1.html',
        'stack 02':'Stack/Stack2.html',
        'stack 3': 'Stack/Stack3.html',
        'stack 4': 'Stack/Stack4.html',
        'stack 5': 'Stack/Stack5.html',
        'stack 6': 'Stack/Stack6.html',
        'stack 7': 'Stack/Stack7.html',
        'stack 8': 'Stack/Stack8.html',
        'stack 9': 'Stack/Stack9.html',
        'stack 10':'Stack/Stack10.html',
        'stack 11':'Stack/Stack11.html',
        'stack 12':'Stack/Stack12.html',
        'stack 13':'Stack/Stack13.html',
        'Queue 01':'Queue/Queue1.html',
        'Queue 02':'Queue/Queue2.html',
        'Queue 3': 'Queue/Queue3.html',
        'Queue 4': 'Queue/Queue4.html',
        'Queue 5': 'Queue/Queue5.html',
        'Queue 6': 'Queue/Queue6.html',
        'Queue 7': 'Queue/Queue7.html',
        'Queue 8': 'Queue/Queue8.html',
        'Queue 9': 'Queue/Queue9.html',
        'Queue 10':'Queue/Queue10.html',
        'Queue 11':'Queue/Queue11.html',
        'Queue 12':'Queue/Queue12.html',
        'Queue 13':'Queue/Queue13.html',
        'link-list 01':'LinkList/Link1.html',
        'link-list 02':'LinkList/Link2.html',
        'link-list 3': 'LinkList/Link3.html',
        'link-list 4': 'LinkList/Link4.html',
        'link-list 5': 'LinkList/Link5.html',
        'link-list 6': 'LinkList/Link6.html',
        'link-list 7': 'LinkList/Link7.html',
        'link-list 8': 'LinkList/Link8.html',
        'link-list 9': 'LinkList/Link9.html',
        'link-list 10':'LinkList/Link10.html',
        'link-list 11':'LinkList/Link11.html',
        'Recursion 01':'Recursion/Recursion (1).html',
        'Recursion 02':'Recursion/Recursion (2).html',
        'Recursion 3': 'Recursion/Recursion (3).html',
        'Recursion 4': 'Recursion/Recursion (4).html',
        'Recursion 5': 'Recursion/Recursion (5).html',
        'Recursion 6': 'Recursion/Recursion (6).html',
        'Recursion 7': 'Recursion/Recursion (7).html',
        'Recursion 8': 'Recursion/Recursion (8).html',
        'Searching 01':'Searching/SS1.html',
        'Searching 02':'Searching/SS2.html',
        'Searching 3': 'Searching/SS3.html',
        'Searching 4': 'Searching/SS4.html',
        'Searching 5': 'Searching/SS5.html',
        'Searching 6': 'Searching/SS6.html',
        'Searching 7': 'Searching/SS7.html',
        'Searching 8': 'Searching/SS8.html',
        'Searching 9': 'Searching/SS9.html',
        'Searching 10':'Searching/SS10.html',
        'Sorting 01':'Sorting/sort1.html',
        'Sorting 02':'Sorting/sort2.html',
        'Sorting 3': 'Sorting/sort3.html',
        'Sorting 4': 'Sorting/sort4.html',
        'Sorting 5': 'Sorting/sort5.html',
        'Sorting 6': 'Sorting/sort6.html',
        'Sorting 7': 'Sorting/sort7.html',
        'Sorting 8': 'Sorting/sort8.html',
        'Sorting 9': 'Sorting/sort9.html',
        'Sorting 10':'Sorting/sort10.html',
        'Sorting 11':'Sorting/sort11.html',
        'Sorting 12':'Sorting/sort12.html',
        'Sorting 13':'Sorting/sort13.html',
        'Sorting 14':'Sorting/sort14.html',
        'Sorting 15':'Sorting/sort15.html',
        'Sorting 16':'Sorting/sort16.html',
        'Sorting 17':'Sorting/sort17.html',
        'Sorting 18':'Sorting/sort18.html',
        'Sorting 19':'Sorting/sort19.html',
        'Sorting 20':'Sorting/sort20.html',
        'Tree 01':'Tree/tree1.html',
        'Tree 02':'Tree/tree2.html',
        'Tree 3': 'Tree/tree3.html',
        'Tree 4': 'Tree/tree4.html',
        'Tree 5': 'Tree/tree5.html',
        'Tree 6': 'Tree/tree6.html',
        'Tree 7': 'Tree/tree7.html',
        'Tree 8': 'Tree/tree8.html',
        'Tree 9': 'Tree/tree9.html',
        'Tree 10':'Tree/tree10.html',
        'Tree 11':'Tree/tree11.html',
        'Tree 12':'Tree/tree12.html',
        'Tree 13':'Tree/tree13.html',
        'Tree 14':'Tree/tree14.html',
        'Tree 15':'Tree/tree15.html',
        'Tree 16':'Tree/tree16.html',
        'Tree 17':'Tree/tree17.html',
        'Tree 18':'Tree/tree18.html',
        'Tree 19':'Tree/tree19.html',
        'Tree 20':'Tree/tree20.html',
        'Graph 01':'Graph/Graph1.html',
        'Graph 02':'Graph/Graph2.html',
        'Graph 3': 'Graph/Graph3.html',
        'Graph 4': 'Graph/Graph4.html',
        'Graph 5': 'Graph/Graph5.html',
        'Graph 6': 'Graph/Graph6.html',
        // Add more program links here
    };
    // Program names and their corresponding links

        // Filter programs based on search input
        const filteredPrograms = Object.keys(programLinks)
            .filter(program => program.toLowerCase().includes(searchInput));

        // Populate datalist with filtered programs
        const datalist = document.getElementById('program-list');
        datalist.innerHTML = '';
        filteredPrograms.forEach(program => {
            const option = document.createElement('option');
            option.value = program;
            datalist.appendChild(option);
        });

        // If there's only one matching program, automatically load it in the iframe
        if (filteredPrograms.length === 1) {
            loadLinkInIframe(programLinks[filteredPrograms[0]]);
        }
    }
    // Event listener for input event (real-time filtering)
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', searchProgram);
*/
    document.addEventListener('DOMContentLoaded', function () {
    let iframe = document.getElementById('iframe');

    function loadLinkInIframe(link) {
        iframe.src = link;
    }

    function searchProgram() {
        let searchInput = document.getElementById('search-input').value.toLowerCase().trim();
        const programLinks = {
        'Array 01': 'Arrays/Arr1.html',
        'Array 02': 'Arrays/Arr2.html',
        'Array 3': 'Arrays/Arr3.html',
        'Array 4': 'Arrays/Arr4.html',
        'Array 5': 'Arrays/Arr5.html',
        'Array 6': 'Arrays/Arr6.html',
        'Array 7': 'Arrays/Arr7.html',
        'Array 8': 'Arrays/Arr8.html',
        'Array 9': 'Arrays/Arr9.html',
        'Array 10':'Arrays/Arr10.html',
        'Array 11':'Arrays/Arr11.html',
        'Array 12':'Arrays/Arr12.html',
        'Array 13':'Arrays/Arr13.html',
        'Array 14':'Arrays/Arr14.html',
        'Array 15':'Arrays/Arr15.html',
        'Array 16':'Arrays/Arr16.html',
        'Array 17':'Arrays/Arr17.html',
        'Array 18':'Arrays/Arr18.html',
        'Array 19':'Arrays/Arr19.html',
        'Array 20':'Arrays/Arr20.html',
        '2d 01':'2DArray/Arr1.html',
        '2d 02':'2DArray/Arr2.html',
        '2d 3': '2DArray/Arr3.html',
        '2d 4': '2DArray/Arr4.html',
        '2d 5': '2DArray/Arr5.html',
        '2d 6': '2DArray/Arr6.html',
        '2d 7': '2DArray/Arr7.html',
        'string 01':'String/str1.html',
        'string 02':'String/str2.html',
        'string 3': 'String/str3.html',
        'string 4': 'String/str4.html',
        'string 5': 'String/str5.html',
        'string 6': 'String/str6.html',
        'string 7': 'String/str7.html',
        'string 8': 'String/str8.html',
        'string 9': 'String/str9.html',
        'string 10':'String/str10.html',
        'string 11':'String/str11.html',
        'string 12':'String/str12.html',
        'string 13':'String/str13.html',
        'string 14':'String/str14.html',
        'string 15':'String/str15.html',
        'string 16':'String/str16.html',
        'string 17':'String/str17.html',
        'string 18':'String/str18.html',
        'string 19':'String/str19.html',
        'string 20':'String/str20.html',
        'string 21':'String/str21.html',
        'string 22':'String/str22.html',
        'string 23':'String/str23.html',
        'string 24':'String/str24.html',
        'string 25':'String/str25.html',
        'string 26':'String/str26.html',
        'string 27':'String/str27.html',
        'string 28':'String/str28.html',
        'string 29':'String/str29.html',
        'stack 01':'Stack/Stack1.html',
        'stack 02':'Stack/Stack2.html',
        'stack 3': 'Stack/Stack3.html',
        'stack 4': 'Stack/Stack4.html',
        'stack 5': 'Stack/Stack5.html',
        'stack 6': 'Stack/Stack6.html',
        'stack 7': 'Stack/Stack7.html',
        'stack 8': 'Stack/Stack8.html',
        'stack 9': 'Stack/Stack9.html',
        'stack 10':'Stack/Stack10.html',
        'stack 11':'Stack/Stack11.html',
        'stack 12':'Stack/Stack12.html',
        'stack 13':'Stack/Stack13.html',
        'Queue 01':'Queue/Queue1.html',
        'Queue 02':'Queue/Queue2.html',
        'Queue 3': 'Queue/Queue3.html',
        'Queue 4': 'Queue/Queue4.html',
        'Queue 5': 'Queue/Queue5.html',
        'Queue 6': 'Queue/Queue6.html',
        'Queue 7': 'Queue/Queue7.html',
        'Queue 8': 'Queue/Queue8.html',
        'Queue 9': 'Queue/Queue9.html',
        'Queue 10':'Queue/Queue10.html',
        'Queue 11':'Queue/Queue11.html',
        'Queue 12':'Queue/Queue12.html',
        'Queue 13':'Queue/Queue13.html',
        'link-list 01':'LinkList/Link1.html',
        'link-list 02':'LinkList/Link2.html',
        'link-list 3': 'LinkList/Link3.html',
        'link-list 4': 'LinkList/Link4.html',
        'link-list 5': 'LinkList/Link5.html',
        'link-list 6': 'LinkList/Link6.html',
        'link-list 7': 'LinkList/Link7.html',
        'link-list 8': 'LinkList/Link8.html',
        'link-list 9': 'LinkList/Link9.html',
        'link-list 10':'LinkList/Link10.html',
        'link-list 11':'LinkList/Link11.html',
        'Recursion 01':'Recursion/Recursion (1).html',
        'Recursion 02':'Recursion/Recursion (2).html',
        'Recursion 3': 'Recursion/Recursion (3).html',
        'Recursion 4': 'Recursion/Recursion (4).html',
        'Recursion 5': 'Recursion/Recursion (5).html',
        'Recursion 6': 'Recursion/Recursion (6).html',
        'Recursion 7': 'Recursion/Recursion (7).html',
        'Recursion 8': 'Recursion/Recursion (8).html',
        'Searching 01':'Searching/SS1.html',
        'Searching 02':'Searching/SS2.html',
        'Searching 3': 'Searching/SS3.html',
        'Searching 4': 'Searching/SS4.html',
        'Searching 5': 'Searching/SS5.html',
        'Searching 6': 'Searching/SS6.html',
        'Searching 7': 'Searching/SS7.html',
        'Searching 8': 'Searching/SS8.html',
        'Searching 9': 'Searching/SS9.html',
        'Searching 10':'Searching/SS10.html',
        'Sorting 01':'Sorting/sort1.html',
        'Sorting 02':'Sorting/sort2.html',
        'Sorting 3': 'Sorting/sort3.html',
        'Sorting 4': 'Sorting/sort4.html',
        'Sorting 5': 'Sorting/sort5.html',
        'Sorting 6': 'Sorting/sort6.html',
        'Sorting 7': 'Sorting/sort7.html',
        'Sorting 8': 'Sorting/sort8.html',
        'Sorting 9': 'Sorting/sort9.html',
        'Sorting 10':'Sorting/sort10.html',
        'Sorting 11':'Sorting/sort11.html',
        'Sorting 12':'Sorting/sort12.html',
        'Sorting 13':'Sorting/sort13.html',
        'Sorting 14':'Sorting/sort14.html',
        'Sorting 15':'Sorting/sort15.html',
        'Sorting 16':'Sorting/sort16.html',
        'Sorting 17':'Sorting/sort17.html',
        'Sorting 18':'Sorting/sort18.html',
        'Sorting 19':'Sorting/sort19.html',
        'Sorting 20':'Sorting/sort20.html',
        'Tree 01':'Tree/tree1.html',
        'Tree 02':'Tree/tree2.html',
        'Tree 3': 'Tree/tree3.html',
        'Tree 4': 'Tree/tree4.html',
        'Tree 5': 'Tree/tree5.html',
        'Tree 6': 'Tree/tree6.html',
        'Tree 7': 'Tree/tree7.html',
        'Tree 8': 'Tree/tree8.html',
        'Tree 9': 'Tree/tree9.html',
        'Tree 10':'Tree/tree10.html',
        'Tree 11':'Tree/tree11.html',
        'Tree 12':'Tree/tree12.html',
        'Tree 13':'Tree/tree13.html',
        'Tree 14':'Tree/tree14.html',
        'Tree 15':'Tree/tree15.html',
        'Tree 16':'Tree/tree16.html',
        'Tree 17':'Tree/tree17.html',
        'Tree 18':'Tree/tree18.html',
        'Tree 19':'Tree/tree19.html',
        'Tree 20':'Tree/tree20.html',
        'Graph 01':'Graph/Graph1.html',
        'Graph 02':'Graph/Graph2.html',
        'Graph 3': 'Graph/Graph3.html',
        'Graph 4': 'Graph/Graph4.html',
        'Graph 5': 'Graph/Graph5.html',
        'Graph 6': 'Graph/Graph6.html',

        };
        // Program names and their corresponding links

        // Filter programs based on search input
        const filteredPrograms = Object.keys(programLinks)
            .filter(program => program.toLowerCase().includes(searchInput));

        // Populate datalist with filtered programs
        const datalist = document.getElementById('program-list');
        datalist.innerHTML = '';
        filteredPrograms.forEach(program => {
            const option = document.createElement('option');
            option.value = program;
            datalist.appendChild(option);
        });

        // If there's only one matching program, automatically load it in the iframe
        if (filteredPrograms.length === 1) {
            loadLinkInIframe(programLinks[filteredPrograms[0]]);
        }
    }

    // Event listener for input event (real-time filtering)
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', searchProgram);
});

    /*

    const datalist = document.getElementById('program-list');
    datalist.innerHTML = ''; // Clear the datalist

    // Check if the searchInput matches any program name and populate the datalist.
    for (const programName in programLinks) {
        if (programName.toLowerCase().includes(searchInput.toLowerCase())) {
            const option = document.createElement('option');
            option.value = programName;
            datalist.appendChild(option);
        }
    }

    // If there are no matches, handle the case.
    if (datalist.children.length === 0) {
        alert('No matching programs found');
    } else if (datalist.children.length === 1) {
        // Automatically select the only matching program if there's only one.
        const selectedProgram = datalist.children[0].value;
        const selectedLink = programLinks[selectedProgram];
        loadLinkInIframe(selectedLink);
    }
}
    
*/
// ---------------------------------------------------------------------------------------
            let linkSelector = document.getElementById('linkSelector');
            linkSelector.addEventListener('click', () => {
                let selectedLink = linkSelector.value;
                loadLinkInIframe(selectedLink);
            });
    
            let linkSelecto = document.getElementById('linkSelecto');
            linkSelecto.addEventListener('click', () => {
                let selectedLink = linkSelecto.value;
                loadLinkInIframe(selectedLink);
            });
            let linkSelector2 = document.getElementById('linkSelector2');
    
            linkSelector2.addEventListener('click', () => {
                let selectedLink = linkSelector2.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector3 = document.getElementById('linkSelector3');
    
            linkSelector3.addEventListener('click', () => {
                let selectedLink = linkSelector3.value;
                loadLinkInIframe(selectedLink);
            });
    
           
            let linkSelector4 = document.getElementById('linkSelector4');
    
            linkSelector4.addEventListener('click', () => {
                let selectedLink = linkSelector4.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector5 = document.getElementById('linkSelector5');
    
            linkSelector5.addEventListener('click', () => {
                let selectedLink = linkSelector5.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector6 = document.getElementById('linkSelector6');
    
            linkSelector6.addEventListener('click', () => {
                let selectedLink = linkSelector6.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector7 = document.getElementById('linkSelector7');
    
            linkSelector7.addEventListener('click', () => {
                let selectedLink = linkSelector7.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector8 = document.getElementById('linkSelector8');
    
            linkSelector8.addEventListener('click', () => {
                let selectedLink = linkSelector8.value;
                loadLinkInIframe(selectedLink);
            });
    
            
            let linkSelector9 = document.getElementById('linkSelector9');
    
            linkSelector9.addEventListener('click', () => {
                let selectedLink = linkSelector9.value;
                loadLinkInIframe(selectedLink);
            });
          let linkSelector11 = document.getElementById('linkSelector11');
    
            linkSelector11.addEventListener('click', () => {
                let selectedLink = linkSelector11.value;
                loadLinkInIframe(selectedLink);
            });
    
        function countProgramLinks() {
    const linkSelectors = document.querySelectorAll('.op');
    linkSelectors.forEach((selector, index) => {
        const options = selector.querySelectorAll('option');
        const linkCount = options.length;
        console.log(`Category ${index + 1}: ${linkCount} program links`);
    });
}
countProgramLinks();
function countTotalProgramLinks() {
    const linkSelectors = document.querySelectorAll('.op');
    let totalLinkCount = 0;
    
    linkSelectors.forEach((selector) => {
        const options = selector.querySelectorAll('option');
        const linkCount = options.length;
        totalLinkCount += linkCount;
    });
    
    console.log(`Total number of program links: ${totalLinkCount}`);
}

// Call the function to count the total program links
countTotalProgramLinks();
