function h(t) {
  const a = t.replace("#", ""), r = parseInt(a.substring(0, 2), 16), e = parseInt(a.substring(2, 4), 16), n = parseInt(a.substring(4, 6), 16), o = (m) => Math.max(0, Math.min(255, Math.round(m))).toString(16).padStart(2, "0"), s = `#${o(r * 0.8)}${o(e * 0.8)}${o(n * 0.8)}`, l = t, p = `#${o(r + (255 - r) * 0.3)}${o(e + (255 - e) * 0.3)}${o(n + (255 - n) * 0.3)}`, u = `#${o(r + (255 - r) * 0.5)}${o(e + (255 - e) * 0.5)}${o(n + (255 - n) * 0.5)}`;
  return {
    color1: s,
    color2: l,
    color3: p,
    color4: u
  };
}
function c(t, a) {
  return {
    gradient: h(t.primaryColor),
    logo: t.logoUrl || null,
    supportLogo: t.supportLogoUrl || null,
    avatars: t.avatarUrl ? [t.avatarUrl] : [],
    webhookUrl: t.webhookUrl || a,
    botName: t.botName,
    welcomeMessage: t.welcomeMessage,
    homepageHeading: t.homepageHeading,
    position: t.position,
    primaryColor: t.primaryColor,
    launcherText: t.launcherText,
    tagline: t.tagline,
    showBranding: t.showBranding
  };
}
export {
  c as mapConfigToCustomization
};
