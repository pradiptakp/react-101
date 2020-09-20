/*
  Ini utils auth, tujuannya buat ngecek di localstorage ada item "USER" apa nggak. Btw nanti
  kalo misal nyimpen token atau yg sensitif2 gitu pake cookies aja lho ya. Kalo sekedar data
  kayak nama user di localStorage aja gpp
*/

export const login = (user) => {
  localStorage.setItem("USER", user);
};

export const logout = () => {
  localStorage.removeItem("USER");
};

export const isLogin = () => {
  if (localStorage.getItem("USER")) {
    return true;
  }
  return false;
};
