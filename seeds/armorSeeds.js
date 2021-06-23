const { Armor } = require('../models');

const armorData = [
    {
        mainEffect: 'Auto Stim',
        majorEffect: '+1 Agility',
        minorEffect: '50% more durability than normal',
        itemType: 'Metal Right Arm',
        capsValue: 375,
        user_id: 2
    },
    {
        mainEffect: "Exterminator's",
        majorEffect: '+1 Charisma',
        minorEffect: 'Junk item weights reduced by 20%',
        itemType: 'Marine Armor Right Leg',
        capsValue: 725,
        user_id: 2,
    },
    {
        mainEffect: 'Auto Stim',
        majorEffect: '+1 Perception',
        minorEffect: 'Ammo weight reduced by 20%',
        itemType: 'Heavy Leather Right Arm',
        capsValue: 500,
        user_id: 1,
    },
    {
        mainEffect: 'Auto Stim',
        majorEffect: '+1 Strength',
        minorEffect: 'Reduces falling damage by 50%',
        itemType: 'Trapper Right Arm',
        capsValue: 250,
        user_id: 1,
    }
]

const seedArmor = () => Armor.bulkCreate(armorData);

module.exports = seedArmor;