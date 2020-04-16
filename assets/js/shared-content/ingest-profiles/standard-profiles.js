var BCLSprofiles = (function(window, document, BCLSprofileData) {
  var mainSection = document.querySelector('.bcls-article'),
    data = BCLSprofileData,
    audioTableBody = document.getElementById('audioTableBody'),
    progressiveAudioTableBody = document.getElementById('progressiveAudioTableBody'),
    videoRenditionsTableBody = document.getElementById('videoRenditionsTableBody'),
    hevcTableBody = document.getElementById('hevcTableBody'),
    progressiveTableBody = document.getElementById('progressiveTableBody'),
    headersArray,
    prop,
    navLabel = [];

    /**
 * sort an array of objects based on an object property
 * @param {array} targetArray - array to be sorted
 * @param {string|number} objProperty - object property to sort on
 * @return sorted array
 */
function sortArray(targetArray, objProperty) {
  targetArray.sort(function (a, b) {
    var propA = a[objProperty].toLowerCase(), propB = b[objProperty].toLowerCase();
    // sort ascending; reverse propA and propB to sort descending
    if (propA < propB) {
          return -1;
    } else if (propA > propB) {
          return 1;
    } else {
          return 0;
    }
  });
  return targetArray;
}

  /**
   * determines whether specified item is in an array
   *
   * @param {array} array to check
   * @param {string} item to check for
   * @return {boolean} true if item is in the array, else false
   */
  function isItemInArray(arr, item) {
    var i,
      iMax = arr.length;
    for (i = 0; i < iMax; i++) {
      if (arr[i] === item) {
        return true;
      }
    }
    return false;
  }

  /**
   * find index of an object in array of objects
   * based on some property value
   *
   * @param {array} targetArray array to search
   * @param {string} objProperty object property to search
   * @param {string} value of the property to search for
   * @return {integer} index of first instance if found, otherwise returns -1
  */
  function findObjectInArray(targetArray, objProperty, value) {
      var i, totalItems = targetArray.length, objFound = false;
      for (i = 0; i < totalItems; i++) {
          if (targetArray[i][objProperty] === value) {
              objFound = true;
              return i;
          }
      }
      if (objFound === false) {
          return -1;
      }
  }

  /**
   * remove spaces from passed string
   * @param  {string} str - the string to remove spaces from
   * @return {str}   - string with spaces removed
   */
  function removeSpaces(str) {
    if (isDefined(str)) {
      return str.replace(/\s/g, "");
    }
    return "";
  }
  /**
   * tests for all the ways a variable might be undefined or not have a value
   * @param {*} x the variable to test
   * @return {Boolean} true if variable is defined and has a value
   */
  function isDefined(x) {
    if (x === '' || x === null || x === undefined) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * create an element
   * @param  {string} type - the element type
   * @param  {object} attributes - attributes to add to the element
   * @return {object} the HTML element
   */
  function createEl(type, attributes) {
    var el;
    if (isDefined(type)) {
      el = document.createElement(type);
      if (isDefined(attributes)) {
        var attr;
        for (attr in attributes) {
          el.setAttribute(attr, attributes[attr]);
        }
      }
      return el;
    }
  }


  function buildSummaryTable() {
    var newSectionNode = document.createElement("section"),
      sectionHeadingNode = document.createElement("h2"),
      sectionSubHeadingNode,
      sectionIntroNode = document.createElement("p"),
      profileTableNode = document.createElement("table"),
      profileTableNodeCAE = document.createElement("table"),
      profiletheadNode = document.createElement("thead"),
      profiletheadNodeCAE = document.createElement("thead"),
      profiletbodyNode = document.createElement("tbody"),
      profiletbodyNodeCAE = document.createElement("tbody"),
      sectionHeadingElem,
      sectionIntroElem,
      profileTableElem,
      profiletheadElem,
      profiletbodyElem,
      fragment1 = document.createDocumentFragment(),
      fragment2 = document.createDocumentFragment(),
      i,
      iMax,
      j,
      jMax,
      k,
      kMax,
      item,
      str = "",
      tr,
      th,
      td,
      a,
      content;
    // static profiles
    iMax = data.BCLSprofilesStatic.length;
    // massage data
    for (i = 0; i < iMax; i++) {
      item = data.BCLSprofilesStatic[i];
      item.videoRenditions = 0;
      item.audioRenditions = 0;
      item.imageRenditions = item.dynamic_origin.images.length;

      jMax = item.dynamic_origin.renditions.length;
      item.numRenditions = jMax;

      for (j = 0; j < jMax; j++) {
        // count up renditions of each kind
        // console.log('item.dynamic_origin.renditions[j]', item.dynamic_origin.renditions[j]);
        if (!isAudio(item.dynamic_origin.renditions[j])) {
          item.videoRenditions++;
        } else {
          item.audioRenditions++;
        }
      }
    }

    iMax = data.BCLSprofilesStatic.length;
    for (i = 0; i < iMax; i++) {
      item = data.BCLSprofilesStatic[i];
      tr = document.createElement('tr');
      profiletbodyNode.appendChild(tr);
      td = document.createElement('td');
      a = document.createElement('a');
      a.setAttribute('href', '#' + removeSpaces(item.name));
      content = document.createTextNode(item.name);
      a.appendChild(content);
      td.appendChild(a);
      tr.appendChild(td);
      td = document.createElement('td');
      td.setAttribute('class', 'bcl-center');
      content = document.createTextNode(item.videoRenditions);
      td.appendChild(content);
      tr.appendChild(td);
      td = document.createElement('td');
      td.setAttribute('class', 'bcl-center');
      content = document.createTextNode(item.audioRenditions);
      td.appendChild(content);
      tr.appendChild(td);
      td = document.createElement('td');
      td.setAttribute('class', 'bcl-center');
      content = document.createTextNode(item.imageRenditions);
      td.appendChild(content);
      tr.appendChild(td);
      td = document.createElement('td');
      content = document.createTextNode(item.description);
      td.appendChild(content);
      tr.appendChild(td);
    }
    content = document.createTextNode('Standard Profiles List');
    sectionHeadingNode.appendChild(content);
    content = document.createTextNode('Click on a profile name to see details of the renditions it includes. Note that the actual renditions created will depend on the quality of the source video.');
    sectionIntroNode.appendChild(content);
    tr = document.createElement('tr');
    profiletheadNode.appendChild(tr);
    th = document.createElement('th');
    content = document.createTextNode('Profile Name');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Video');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Audio');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Image');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Description');
    th.appendChild(content);
    tr.appendChild(th);

    fragment1.appendChild(newSectionNode);
    mainSection.appendChild(fragment1);


    // now the CAE profiles
    iMax = data.BCLSprofilesDynamic.length;

    for (i = 0; i < iMax; i++) {
      item = data.BCLSprofilesDynamic[i];
      item.videoRenditions = item.dynamic_origin.dynamic_profile_options.min_renditions + ' - ' + item.dynamic_origin.dynamic_profile_options.max_renditions;
      item.audioRenditions = item.dynamic_origin.renditions.length;
      item.imageRenditions = item.dynamic_origin.images.length;

    }
    sectionSubHeadingNode = document.createElement('h3');
    content = document.createTextNode('Context Aware Encoding Profiles');
    sectionSubHeadingNode.appendChild(content);
    profileTableNodeCAE.setAttribute("id", "profileSummaryTableCAE");
    profileTableNodeCAE.setAttribute("class", "bcls-table");
    profiletheadNodeCAE.setAttribute("id", "profileSummaryTableTheadCAE");
    profiletheadNodeCAE.setAttribute("class", "bcls-table__head");
    profiletbodyNodeCAE.setAttribute("id", "profileSummaryTableTbodyCAE");
    profiletbodyNodeCAE.setAttribute("class", "bcls-table__body");
    newSectionNode.appendChild(sectionSubHeadingNode);
    newSectionNode.appendChild(profileTableNodeCAE);
    profileTableNodeCAE.appendChild(profiletheadNodeCAE);
    profileTableNodeCAE.appendChild(profiletbodyNodeCAE);
    iMax = data.BCLSprofilesDynamic.length;
    for (i = 0; i < iMax; i++) {
      item = data.BCLSprofilesDynamic[i];
      tr = document.createElement('tr');
      profiletbodyNodeCAE.appendChild(tr);
      td = document.createElement('td');
      a = document.createElement('a');
      a.setAttribute('href', '#' + removeSpaces(item.name));
      content = document.createTextNode(item.name);
      a.appendChild(content);
      td.appendChild(a);
      tr.appendChild(td);
      td = document.createElement('td');
      td.setAttribute('class', 'bcl-center');
      content = document.createTextNode(item.videoRenditions);
      td.appendChild(content);
      tr.appendChild(td);
      td = document.createElement('td');
      td.setAttribute('class', 'bcl-center');
      content = document.createTextNode(item.audioRenditions);
      td.appendChild(content);
      tr.appendChild(td);
      td = document.createElement('td');
      td.setAttribute('class', 'bcl-center');
      content = document.createTextNode(item.imageRenditions);
      td.appendChild(content);
      tr.appendChild(td);
      td = document.createElement('td');
      content = document.createTextNode(item.description);
      td.appendChild(content);
      tr.appendChild(td);
    }
    fragment2.appendChild(newSectionNode);
    mainSection.appendChild(fragment2);

    tr = document.createElement('tr');
    profiletheadNodeCAE.appendChild(tr);
    th = document.createElement('th');
    content = document.createTextNode('Profile Name');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Video');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Audio');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Image');
    th.appendChild(content);
    tr.appendChild(th);
    th = document.createElement('th');
    content = document.createTextNode('Description');
    th.appendChild(content);
    tr.appendChild(th);

  }

  function buildDetailTables() {
    // build the details of each rendition as a section
    var section,
      fragment = document.createDocumentFragment(),
      sectionHeading,
      sectionSubHeading,
      sectionJsonHeading,
      sectionJsonP,
      sectionTableHeading,
      renditionList,
      renditionListNote,
      renditionListNoteA,
      renditionTable,
      renditionthead,
      renditiontbody,
      profileSettingsTable,
      profileSettingsTableHeading,
      profileSettingsthead,
      profileSettingstbody,
      tr,
      th,
      td,
      ul,
      li,
      link,
      profilePre,
      profileCode,
      i, j, k, jMax, iMax, kMax,
      headings,
      profile,
      rendition,
      renditionProperty,
      text,
      str,
      l,
      lMax,
      re = /_/g;
    // static profiles
    iMax = data.BCLSprofilesStatic.length;
    for (i = 0; i < iMax; i++) {
      var renditionsArray = [],
        renditionListHead,
        renditionListItem;
      headersArray = [];
      profile = data.BCLSprofilesStatic[i];
      renditionsArray = profile.dynamic_origin.renditions;
      renditionsArray.sort();
      // remove id's and other stuff from data
      delete profile.id;
      delete profile.version;
      delete profile.brightcove_standard;
      delete profile.date_created;
      delete profile.date_last_modified;
      delete profile.videoRenditions;
      delete profile.audioRenditions;
      delete profile.imageRenditions;
      delete profile.numRenditions;
      // profile.name = profile.name + ' Copy';
      profile.account_id = null;
      section = createEl("section", {
        class: "bcls-section"
      });
      sectionHeading = createEl("h2", {
        id: removeSpaces(profile.name)
      });
      sectionSubHeading = document.createElement("p");
      renditionListHead = document.createElement('h5');
      renditionList = createEl('ul', {
        'style': 'font-weight:600;'
      });
      renditionListHead.textContent = 'Renditions included:';
      kMax = renditionsArray.length;
      for (k = 0; k < kMax; k++) {
        renditionListItem = document.createElement('li');
        renditionListItem.textContent = renditionsArray[k];
        renditionList.appendChild(renditionListItem);
      }
      renditionListNote = createEl('p');
      renditionListNoteA = createEl('a', {
        href: '#Renditions'
      });
      text = document.createTextNode('Rendition Details for Dynamic Delivery');
      renditionListNoteA.appendChild(text);
      text = document.createTextNode('For details on the renditions created see ');
      renditionListNote.appendChild(text);
      renditionListNote.appendChild(renditionListNoteA);
      sectionJsonHeading = createEl("h4", {
        id: removeSpaces(profile.name) + "json"
      });
      text = document.createTextNode("JSON data for the profile");
      sectionJsonHeading.appendChild(text);
      sectionJsonP = createEl('p', {
        class: 'BCL-aside'
      });
      text = document.createTextNode('Note: if you copy and paste the JSON to make a new profile, you will need to replace the null value for "account_id" with your own account id, and replace the name with a new name!');
      sectionJsonP.appendChild(text);
      sectionTableHeading = createEl("h4");
      profileCode = createEl("textarea", {
        class: 'bcls-code',
        style: 'height:20em;'
      });
      section.appendChild(sectionHeading);
      section.appendChild(sectionSubHeading);
      section.appendChild(renditionListHead);
      section.appendChild(renditionList);
      section.appendChild(renditionListNote);
      section.appendChild(sectionTableHeading);
      renditionTable = createEl("table", {
        class: "bcls-table"
      });
      renditionthead = createEl("thead", {
        class: 'bcls-table__head'
      });
      renditiontbody = createEl("tbody", {
        class: 'bcls-table__body'
      });
      section.appendChild(renditionTable);
      renditionTable.appendChild(renditionthead);

      renditionTable.appendChild(renditiontbody);

      section.appendChild(sectionJsonHeading);
      section.appendChild(sectionJsonP);
      section.appendChild(profileCode);
      text = document.createTextNode(JSON.stringify(profile, false, "  "));
      profileCode.appendChild(text);
      fragment.appendChild(section);
      text = document.createTextNode(profile.name);
      sectionHeading.appendChild(text);
      link = createEl("a", {
        href: "#" + profile.name + "json"
      });
      text = document.createTextNode("View rendition information in JSON form");
      link.appendChild(text);
      sectionSubHeading.appendChild(link);
      text = document.createTextNode("Table of image rendition properties");
      sectionTableHeading.appendChild(text);
      // now do the renditions
      // headersArray.push('renditions');
      jMax = profile.dynamic_origin.images.length;
      // get all properties and build the table headers
      for (j = 0; j < jMax; j++) {
        rendition = profile.dynamic_origin.images[j];
        for (prop in rendition) {
          headersArray.push(prop);
        }
      }
      // dedupe the headers
      headersArray = dedupe(headersArray);
      // create the table headers
      lMax = headersArray.length;
      tr = createEl("tr");
      for (l = 0; l < lMax; l++) {
        th = createEl("th");
        text = document.createTextNode(headersArray[l].replace(re, " "));
        th.appendChild(text);
        tr.appendChild(th);
      }
      renditionthead.appendChild(tr);
      // now add the body row for each rendition
      jMax = profile.dynamic_origin.images.length;
      for (j = 0; j < jMax; j++) {
        tr = createEl("tr");
        rendition = profile.dynamic_origin.images[j];
        for (l = 0; l < lMax; l++) {
          td = createEl("td");
          if (headersArray[l] === 'skip') {
            var key,
              skip = rendition[headersArray[l]];
            ul = document.createElement('ul');
            for (key in skip) {
              if (skip.hasOwnProperty(key)) {
                li = document.createElement('li');
                text = document.createTextNode(key + ': ' + skip[key]);
                li.appendChild(text);
                ul.appendChild(li);
              }
            }
            td.appendChild(ul);
          } else {
            str = isDefined(rendition[headersArray[l]]) ? rendition[headersArray[l]] : "";
            text = document.createTextNode(str);
            td.appendChild(text);
          }
          tr.appendChild(td);
        }
        renditiontbody.appendChild(tr);
      }
    }
    mainSection.appendChild(fragment);
    // dynamic profiles
    iMax = data.BCLSprofilesDynamic.length;
    for (i = 0; i < iMax; i++) {
      var renditionsArray = [],
        renditionListHead,
        renditionListItem;
      profile = data.BCLSprofilesDynamic[i];
      renditionsArray = profile.dynamic_origin.renditions;
      renditionsArray.sort();
      headersArray = [];
      // remove id's and other stuff from data
      delete profile.id;
      delete profile.version;
      delete profile.brightcove_standard;
      delete profile.date_created;
      delete profile.date_last_modified;
      delete profile.videoRenditions;
      delete profile.audioRenditions;
      delete profile.imageRenditions;
      delete profile.numRenditions;
      profile.account_id = null;
      section = createEl("section", {
        class: "bcls-section"
      });
      sectionHeading = createEl("h2", {
        id: removeSpaces(profile.name)
      });
      sectionSubHeading = createEl("p");
      renditionListHead = document.createElement('h5');
      renditionList = createEl('ul', {
        'style': 'font-weight:600;'
      });
      renditionListHead.textContent = 'Audio and MP4 renditions included:';
      kMax = renditionsArray.length;
      for (k = 0; k < kMax; k++) {
        renditionListItem = document.createElement('li');
        renditionListItem.textContent = renditionsArray[k];
        renditionList.appendChild(renditionListItem);
      }
      renditionListNote = createEl('p');
      renditionListNoteA = createEl('a', {
        href: 'https://support.brightcove.com/overview-dynamic-ingest-api-dynamic-delivery#ingestProfile'
      });
      text = document.createTextNode('Audio Rendition Details for Context Aware Encoding');
      renditionListNoteA.appendChild(text);
      text = document.createTextNode('For details on the audio renditions created see ');
      renditionListNote.appendChild(text);
      renditionListNote.appendChild(renditionListNoteA);
      sectionJsonHeading = createEl("h4", {
        id: removeSpaces(profile.name) + "json"
      });
      text = document.createTextNode("JSON data for the profile");
      sectionJsonHeading.appendChild(text);
      sectionJsonP = createEl('p', {
        class: 'BCL-aside'
      });
      text = document.createTextNode('Note: if you copy and paste the JSON to make a new profile, you will need to replace the null value for "account_id" with your own account id, and replace the name with a new name!');
      sectionJsonP.appendChild(text);
      sectionTableHeading = createEl("h4");
      profileSettingsTableHeading = createEl("h4");
      profileCode = createEl("textarea", {
        class: 'bcls-code',
        style: 'height:20em;'
      });
      section.appendChild(sectionHeading);
      section.appendChild(sectionSubHeading);
      section.appendChild(renditionListHead);
      section.appendChild(renditionList);
      section.appendChild(renditionListNote);
      section.appendChild(sectionTableHeading);
      renditionTable = createEl("table", {
        class: "bcls-table"
      });
      renditionthead = createEl("thead", {
        class: 'bcls-table__head'
      });
      renditiontbody = createEl("tbody", {
        class: 'bcls-table__body'
      });
      profileSettingsTable = createEl("table", {
        class: "bcls-table"
      });
      profileSettingsthead = createEl("thead", {
        class: 'bcls-table__head'
      });
      profileSettingstbody = createEl("tbody", {
        class: 'bcls-table__body'
      });
      section.appendChild(renditionTable);
      renditionTable.appendChild(renditionthead);

      renditionTable.appendChild(renditiontbody);
      section.appendChild(profileSettingsTableHeading);
      section.appendChild(profileSettingsTable);
      profileSettingsTable.appendChild(profileSettingsthead);
      profileSettingsTable.appendChild(profileSettingstbody);
      section.appendChild(sectionJsonHeading);
      section.appendChild(sectionJsonP);
      section.appendChild(profileCode);
      text = document.createTextNode(JSON.stringify(profile, false, "  "));
      profileCode.appendChild(text);
      fragment.appendChild(section);
      text = document.createTextNode(profile.name);
      sectionHeading.appendChild(text);
      link = createEl("a", {
        href: "#" + profile.name + "json"
      });
      text = document.createTextNode("View rendition information in JSON form");
      link.appendChild(text);
      sectionSubHeading.appendChild(link);
      text = document.createTextNode("Table of image rendition properties");
      sectionTableHeading.appendChild(text);
      text = document.createTextNode('Dynamic Profile Settings');
      profileSettingsTableHeading.appendChild(text);
      jMax = profile.dynamic_origin.images.length;
      for (j = 0; j < jMax; j++) {
        rendition = profile.dynamic_origin.images[j];
        for (prop in rendition) {
          headersArray.push(prop);
        }
      }
      headersArray = dedupe(headersArray);
      lMax = headersArray.length;
      tr = createEl("tr");
      for (l = 0; l < lMax; l++) {
        th = createEl("th");
        text = document.createTextNode(headersArray[l].replace(re, " "));
        th.appendChild(text);
        tr.appendChild(th);
      }
      renditionthead.appendChild(tr);
      jMax = profile.dynamic_origin.images.length;
      for (j = 0; j < jMax; j++) {
        tr = createEl("tr");
        rendition = profile.dynamic_origin.images[j];
        for (l = 0; l < lMax; l++) {
          td = createEl("td");
          if (headersArray[l] === 'skip') {
            var key,
              skip = rendition[headersArray[l]];
            ul = document.createElement('ul');
            for (key in skip) {
              if (skip.hasOwnProperty(key)) {
                li = document.createElement('li');
                text = document.createTextNode(key + ': ' + skip[key]);
                li.appendChild(text);
                ul.appendChild(li);
              }
            }
            td.appendChild(ul);
          } else {
            str = isDefined(rendition[headersArray[l]]) ? rendition[headersArray[l]] : "";
            text = document.createTextNode(str);
            td.appendChild(text);
          }
          tr.appendChild(td);
        }
        renditiontbody.appendChild(tr);
      }
      tr = createEl('tr');
      th = createEl('th');
      text = document.createTextNode('Property');
      th.appendChild(text);
      tr.appendChild(th);
      th = createEl('th');
      text = document.createTextNode('Value');
      th.appendChild(text);
      tr.appendChild(th);
      profileSettingsthead.appendChild(tr);
      for (prop in profile.dynamic_origin.dynamic_profile_options) {
        tr = createEl('tr');
        profileSettingstbody.appendChild(tr);
        td = createEl('td');
        text = document.createTextNode(prop);
        td.appendChild(text);
        tr.appendChild(td);
        td = createEl('td');
        if (prop === 'max_resolution') {
          var ul = createEl('ul'),
            li;
          li = createEl('li');
          text = document.createTextNode('width: ' + profile.dynamic_origin.dynamic_profile_options.max_resolution.width);
          li.appendChild(text);
          ul.appendChild(li);
          li = createEl('li');
          text = document.createTextNode('height: ' + profile.dynamic_origin.dynamic_profile_options.max_resolution.height);
          li.appendChild(text);
          ul.appendChild(li);
          td.appendChild(ul);
          tr.appendChild(td);
        } else if (prop === 'min_resolution') {
          var ul = createEl('ul'),
            li;
          li = createEl('li');
          text = document.createTextNode('width: ' + profile.dynamic_origin.dynamic_profile_options.min_resolution.width);
          li.appendChild(text);
          ul.appendChild(li);
          li = createEl('li');
          text = document.createTextNode('height: ' + profile.dynamic_origin.dynamic_profile_options.min_resolution.height);
          li.appendChild(text);
          ul.appendChild(li);
          td.appendChild(ul);
          tr.appendChild(td);
        } else {
          text = document.createTextNode(profile.dynamic_origin.dynamic_profile_options[prop]);
          td.appendChild(text);
          tr.appendChild(td);
        }
      }
    }
    fragment.appendChild(section);
    mainSection.appendChild(fragment);
    // get reference to codeBlocks
    // call function from toc-shared-content to add profiles to TOC
    BCLS_toc.create_inpage_nav();
  }

  function setCodeBlocks() {
    var i,
      iMax;
    codeBlocks = document.getElementsByClassName('bcls-code');

    function selectCode() {
      this.select();
    }

    iMax = codeBlocks.length;
    for (i = 0; i < iMax; i++) {
      codeBlocks[i].addEventListener('click', selectCode);
    }
  }

  data.BCLSprofilesDynamic = sortArray(data.BCLSprofilesDynamic, 'name')
  data.BCLSprofilesStatic = sortArray(data.BCLSprofilesStatic, 'name')
  data.BCLSrenditionsAudio = sortArray(data.BCLSrenditionsAudio, 'name')
  data.BCLSrenditionsAudioProgressive = sortArray(data.BCLSrenditionsAudioProgressive, 'name')
  data.BCLSrenditionsVideo = sortArray(data.BCLSrenditionsVideo, 'name')
  data.BCLSrenditionsVideoHEVC = sortArray(data.BCLSrenditionsVideoHEVC, 'name')
  data.BCLSrenditionsVideoProgressive = sortArray(data.BCLSrenditionsVideoProgressive, 'name')

})(window, document, BCLSprofileData);
