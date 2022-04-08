class OutputModel {
  constructor(id, name, campaign_id, country, startDate, endDate) {
      this.id = id;
      this.name = name;
      this.campaign_id = campaign_id;
      this.country = country;
      this.startDate = startDate;
      this.endDate = endDate;
  }
}
function mapInputResourcesToOutputResources(resources, resourceType) {
  const filteredResources = resources.filter((resource) => resource.type === resourceType);
  return groupBy(filteredResources, 'region');
}
function groupBy(array, key) {
  // Return the end result
  return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || [])
          .push(
              new OutputModel(currentValue.id,
                  currentValue.name,
                  currentValue.code.replace(/\D/g, ""),
                  currentValue.region.toUpperCase(),
                  currentValue.startDate,
                  currentValue.endDate));
      // Return the current iteration result value, this will be taken as next iteration result value and accumulate
      return result;
  }, {}); // empty object is the initial value for result object
}
;

RESOURCES = [
  {
      id: 1,
      name: "Resource #1",
      startDate: "20220101",
      endDate: "20220102",
      type: "campaign",
      region: "eu",
      code: "uk_1111"
  },
  {
      id: 2,
      name: "Resource #2",
      startDate: "20220102",
      endDate: "20220103",
      type: "order",
      region: "na",
      code: "usa_2222"
  },
  {
      id: 3,
      name: "Resource #3",
      startDate: "20220103",
      endDate: "20220104",
      type: "order",
      region: "na",
      code: "usa_3333"
  },
  {
      id: 4,
      name: "Resource #4",
      startDate: "20220104",
      endDate: "20220105",
      type: "campaign",
      region: "eu",
      code: "es_4444"
  },
  {
      id: 5,
      name: "Resource #5",
      startDate: "20220105",
      endDate: "20220106",
      type: "order",
      region: "eu",
      code: "it_5555"
  },
  {
      id: 6,
      name: "Resource #6",
      startDate: "20220106",
      endDate: "20220107",
      type: "campaign",
      region: "eu",
      code: "mk_1111"
  },
  {
      id: 7,
      name: "Resource #7",
      startDate: "20220107",
      endDate: "20220108",
      type: "order",
      region: "apac",
      code: "cn_7777"
  },
  {
      id: 8,
      name: "Resource #8",
      startDate: "20220108",
      endDate: "20220109",
      type: "campaign",
      region: "eu",
      code: "mk_8888"
  },
  {
      id: 9,
      name: "Resource #9",
      startDate: "20220109",
      endDate: "20220110",
      type: "order",
      region: "apac",
      code: "au_9999"
  },
  {
      id: 10,
      name: "Resource #10",
      startDate: "20220110",
      endDate: "20220111",
      type: "order",
      region: "latam",
      code: "mx_1010"
  },
  {
      id: 11,
      name: "Resource #11",
      startDate: "20220110",
      endDate: "20220111",
      type: "campaign",
      region: "latam",
      code: "mx_2332"
  }
];

const result = mapInputResourcesToOutputResources(RESOURCES, 'campaign');
console.log('Output: ', result);