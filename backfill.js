async function loopHitEndOfRooms() {
  const maxIterations = 1000;
  let count = 0;
  
  while (count < maxIterations) {
    try {
      await Promise.all([
        rs.beeperClientStore.hitEndOfRoom(rs.mainWSS.selectedThread.id, true),
      ]);
      console.log(`hitEndOfRoom done (${count + 1}/${maxIterations})`);
      count++;
    
    } catch (err) {
      console.error('Error in hitEndOfRoom:', err);
      count++;
    }
  }
  
  console.log('Completed all iterations');
}

loopHitEndOfRooms();