import React, { useState } from 'react';

const ZombieFightersList = () => {
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  const [money, setMoney] = useState(100);
  const [team, setTeam] = useState([]); // State to store team members
  const [totalStrength, setTotalStrength] = useState(0); // State for total strength
  const [totalAgility, setTotalAgility] = useState(0); // State for total agility

  // Helper function to recalculate total strength
  const calculateTotalStrength = (team) => {
    const total = team.reduce((sum, fighter) => sum + fighter.strength, 0);
    setTotalStrength(total);
  };

  // Helper function to recalculate total agility
  const calculateTotalAgility = (team) => {
    const total = team.reduce((sum, fighter) => sum + fighter.agility, 0);
    setTotalAgility(total);
  };

  // Function to handle adding a fighter to the team
  const handleAddFighter = (fighter, event) => {
    event.preventDefault();

    if (money >= fighter.price) {
      const newTeam = [...team, fighter];
      setTeam(newTeam);
      setMoney(money - fighter.price);

      // Recalculate total strength and agility
      calculateTotalStrength(newTeam);
      calculateTotalAgility(newTeam);
    } else {
      console.log('Not enough money');
    }
  };

  // Function to handle removing a fighter from the team
  const handleRemoveFighter = (fighter, event) => {
    event.preventDefault();

    const newTeam = team.filter((member) => member.name !== fighter.name);
    setTeam(newTeam);
    setMoney(money + fighter.price); // Refund the price of the removed fighter

    // Recalculate total strength and agility
    calculateTotalStrength(newTeam);
    calculateTotalAgility(newTeam);
  };

  return (
    <div>
      <h2>Money: ${money}</h2>
      <h3>Total Team Strength: {totalStrength}</h3> {/* Display total strength */}
      <h3>Total Team Agility: {totalAgility}</h3> {/* Display total agility */}

      <h3>Team Members:</h3>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((member, index) => (
            <li key={index}>
              <h3>{member.name}</h3>
              <p>Price: ${member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <img src={member.img} alt={member.name} width="150" height="150" />
              <button onClick={(event) => handleRemoveFighter(member, event)}>Remove</button> {/* Remove button */}
            </li>
          ))}
        </ul>
      )}

      <h3>Available Fighters:</h3>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <h3>{fighter.name}</h3>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <img src={fighter.img} alt={fighter.name} width="150" height="150" />
            <button onClick={(event) => handleAddFighter(fighter, event)}>Add</button> {/* Add button */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZombieFightersList;
