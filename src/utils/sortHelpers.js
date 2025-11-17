export function sortData(list, sortBy) {
  switch (sortBy) {
    case "nameAsc":
      return list.sort((a, b) => a.name.localeCompare(b.name));
    case "nameDesc":
      return list.sort((a, b) => b.name.localeCompare(a.name));
    case "empHigh":
      return list.sort((a, b) => b.employees - a.employees);
    case "empLow":
      return list.sort((a, b) => a.employees - b.employees);
    default:
      return list;
  }
}
