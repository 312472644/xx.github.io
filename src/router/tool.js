/**
 * 将路由数据转换为菜单数据
 * @param {Array} router
 * @returns {Array}
 */
export function getMenuList(routerList = []) {
  const list = [];

  routerList.forEach(item => {
    if (!item.hidden) {
      list.push({
        title: item.meta?.title,
        path: item.path,
      });
    }
  });
  return list;
}