
import { faCheck, faSync , faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const trafficShares = [
    { id: 1, label: "Accepter :", value: 60, color: "secondary", icon: faCheck },
    { id: 2, label: "Attente :", value: 30, color: "primary", icon: faSync },
    { id: 3, label: "Réfuser :", value: 10, color: "tertiary", icon: faTrashAlt }
];

const totalOrders = [
    { id: 1, label: "July", value: [1, 5, 2, 5, 4, 3], color: "primary" },
    { id: 2, label: "August", value: [2, 3, 4, 8, 1, 2], color: "secondary" }
];

export {
    trafficShares,
    totalOrders
};