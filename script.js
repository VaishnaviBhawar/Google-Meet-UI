const participants = [
    { name: 'Elon Musk' , image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRRbxF4fD36_9WQm1EOawEkIQPg7_7BgsvVw-ZxgHn2lDOKdyRwpYaAR3zjdrfqwm5MwcQ0hpmLVYIe6mhkILNNckRnkz1Blg'},
    { name: 'vaishnavi bhawar' , image:'https://avatars.githubusercontent.com/u/169648850?v=4' },
    { name: 'Bill Gates' , image:'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQttRFw9J_FdfaSt2aC7PDQSSCDbt8Wb6YZ2nVlWMUD059RNxa2VOinGC7gBFs4J9mW111Ivj4zDRu47o7JD5f-5MEdwIASCA'},
    { name: 'Mark Zuckerberg' ,image:'imgs/img1.jpg' },
    { name: 'Larry Page' ,image:'imgs/img2.jpg'},
    { name: 'Richard Branson' ,image:'imgs/img4.jpg'},
    { name: 'Tim Cook' ,image:'imgs/img1.jpg'},
    { name: 'Mark Cuban',image:'imgs/img2.jpg' },
    { name: 'Ratan Tata' ,image:'imgs/img4.jpg'},
    { name: 'Mukesh Ambani',image:'imgs/img1.jpg' },
    { name: 'Sundar Pichai',image:'imgs/img2.jpg' },
    { name: 'Indra Nooyi' ,image:'imgs/img4.jpg'},
    { name: 'Oprah Winfrey',image:'imgs/img1.jpg' },
    { name: 'Jack Ma' ,image:'imgs/img2.jpg'},
    { name: 'Steve Jobs' ,image:'imgs/img4.jpg'},
    { name: 'Michael Bloomberg' ,image:'imgs/img1.jpg'},
    { name: 'Carlos Slim' ,image:'imgs/img2.jpg'},
    { name: 'Larry Ellison' ,image:'imgs/img4.jpg'},
    
   
  ];
  
  
    
    const participantsContainer = document.getElementById('participants-container');
    
    function displayParticipants(participantList) {
      participantsContainer.innerHTML = '';
      participantList.forEach((participant) => {
        participantsContainer.innerHTML += `
          <div class='participant-card'>
            <img src="${participant.image}" alt="${participant.name}">
            <span>${participant.name}</span>
          </div>
        `;
      });
    }
    
    displayParticipants(participants);
    
    function filterParticipants() {
      const searchQuery = document.getElementById('search').value.toLowerCase();
      const filteredParticipants = participants.filter(participant => 
        participant.name.toLowerCase().includes(searchQuery)
      );
      displayParticipants(filteredParticipants);
    }
    