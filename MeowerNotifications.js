let notificationRequest = Notification.requestPermission();
newNotification("MeowerNotifications is ready!", "https://raw.githubusercontent.com/meower-media-co/Meower-Svelte/master/src/assets/avatars/icon_21.svg", "MeowerNotifications");

function newNotification(body, icon, title) {
    const notification = new Notification(title, { body, icon });
}

window.handlePost = async function(bundle) {
    var user = await fetchURL(`https://api.meower.org/users/${bundle[0]}`);
    var user = JSON.parse(user);
    newNotification(bundle[1], `https://raw.githubusercontent.com/meower-media-co/Meower-Svelte/master/src/assets/avatars/icon_${(user.pfp_data - 1)}.svg`, bundle[0]);
}
