export const conversations = [
  {
    id: 'conv1',
    name: 'Sarah Chen',
    type: 'filmmaker',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    lastMessage: "Thank you for your interest! Here's the latest deck.",
    unread: 2,
    messages: [
      {
        from: 'them',
        text: "Thank you for your interest! Here's the latest deck.",
        time: '10:12 AM',
      },
      { from: 'me', text: 'Looks great! Can you share the budget breakdown?', time: '10:10 AM' },
      {
        from: 'them',
        text: 'Hi! Excited to connect about Midnight in Brooklyn.',
        time: '10:05 AM',
      },
    ],
  },
  {
    id: 'conv2',
    name: 'Alex Rivera',
    type: 'investor',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    lastMessage: "Let's schedule a call to discuss co-investment.",
    unread: 0,
    messages: [
      { from: 'me', text: "Let's schedule a call to discuss co-investment.", time: 'Yesterday' },
      {
        from: 'them',
        text: "I'm interested in your approach to festival deals.",
        time: 'Yesterday',
      },
    ],
  },
  {
    id: 'conv3',
    name: 'Rachel Kim',
    type: 'filmmaker',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    lastMessage: 'We just locked our lead actor!',
    unread: 1,
    messages: [
      { from: 'them', text: 'We just locked our lead actor!', time: '8:30 AM' },
      { from: 'me', text: 'Congrats! Who is it?', time: 'Yesterday' },
    ],
  },
]

export const notifications = [
  { id: 1, text: 'New message from Sarah Chen', time: '2m ago' },
  { id: 2, text: 'Rachel Kim updated her project status', time: '1h ago' },
  { id: 3, text: 'Alex Rivera sent a connection request', time: '3h ago' },
]

export const recommendedInvestors = [
  {
    id: 'inv1',
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    specialty: 'Festival Acquisitions',
  },
  {
    id: 'inv2',
    name: 'Priya Patel',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    specialty: 'Documentary Finance',
  },
]

export const recommendedFilmmakers = [
  {
    id: 'film1',
    name: 'Diego Martinez',
    avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
    project: 'Neural Network (Sci-Fi TV)',
  },
  {
    id: 'film2',
    name: 'Elena Rossi',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    project: 'The Silent Hour (Thriller)',
  },
]
