import React, { useEffect, useState } from 'react';
import axios, { all } from 'axios';
import GameRoomListItem from './GameRoomListItemPage';
import { useDispatch } from 'react-redux';

export const GameRoomListPage = () => {
  const dispatch = useDispatch();
  const [allRooms, setAllRooms] = useState([]);

  const gemeRoomapi = async () => {
    try {
      const response = await axios.get('https://i9c205.p.ssafy.io/api/game').then((response) => {
        console.log(response.data);
        setAllRooms(response.data);
      });
      // axios response
      // 방제목, 인원
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    gemeRoomapi();
  }, []);

  return (
    <div>
      <h1>게임방 목록</h1>
      {allRooms !== [] ? (
        <>
          {allRooms.map((allRoom, index) => {
            return <GameRoomListItem key={index} allRoom={allRoom}></GameRoomListItem>;
          })}
        </>
      ) : (
        <>
          <h2>안뜨는데?</h2>
        </>
      )}
    </div>
  );
};
export default GameRoomListPage;
