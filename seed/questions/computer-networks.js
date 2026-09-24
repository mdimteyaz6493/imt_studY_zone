const computerNetworksQuestions = [
  {
    question: "What is a computer network?",
    options: [
      "A collection of interconnected computers and devices",
      "A single computer with multiple programs",
      "A type of operating system",
      "A programming language"
    ],
    correctAnswer: 0,
    explanation:
      "A computer network is a collection of interconnected computers and devices that communicate and share resources.",
    difficulty: "Easy",
    topic: "Networking Basics"
  },

  {
    question: "Which device is used to connect multiple networks together?",
    options: [
      "Switch",
      "Router",
      "Hub",
      "Repeater"
    ],
    correctAnswer: 1,
    explanation:
      "A router connects different networks and forwards packets between them based on network addresses.",
    difficulty: "Easy",
    topic: "Networking Devices"
  },

  {
    question: "Which device primarily connects devices within a LAN?",
    options: [
      "Router",
      "Switch",
      "Modem",
      "Gateway"
    ],
    correctAnswer: 1,
    explanation:
      "A switch connects devices within a local area network and forwards frames based on MAC addresses.",
    difficulty: "Easy",
    topic: "Networking Devices"
  },

  {
    question: "Which device broadcasts incoming data to all connected ports?",
    options: [
      "Router",
      "Switch",
      "Hub",
      "Firewall"
    ],
    correctAnswer: 2,
    explanation:
      "A traditional hub broadcasts incoming data to all of its ports.",
    difficulty: "Easy",
    topic: "Networking Devices"
  },

  {
    question: "What does LAN stand for?",
    options: [
      "Large Area Network",
      "Local Area Network",
      "Logical Access Network",
      "Linked Area Network"
    ],
    correctAnswer: 1,
    explanation:
      "LAN stands for Local Area Network and typically covers a limited geographic area such as a home, office, or building.",
    difficulty: "Easy",
    topic: "Network Types"
  },

  {
    question: "What does WAN stand for?",
    options: [
      "Wide Area Network",
      "Wireless Area Network",
      "Web Access Network",
      "World Access Node"
    ],
    correctAnswer: 0,
    explanation:
      "WAN stands for Wide Area Network and connects networks across large geographic areas.",
    difficulty: "Easy",
    topic: "Network Types"
  },

  {
    question: "Which network typically covers a small geographic area such as a building?",
    options: [
      "WAN",
      "LAN",
      "MAN",
      "GAN"
    ],
    correctAnswer: 1,
    explanation:
      "A LAN generally covers a small geographic area such as a home, office, school, or building.",
    difficulty: "Easy",
    topic: "Network Types"
  },

  {
    question: "What does MAN stand for?",
    options: [
      "Main Area Network",
      "Metropolitan Area Network",
      "Multiple Access Network",
      "Managed Area Node"
    ],
    correctAnswer: 1,
    explanation:
      "MAN stands for Metropolitan Area Network and generally covers a city or metropolitan area.",
    difficulty: "Easy",
    topic: "Network Types"
  },

  {
    question: "Which topology connects all devices to a central device?",
    options: [
      "Bus",
      "Ring",
      "Star",
      "Mesh"
    ],
    correctAnswer: 2,
    explanation:
      "In a star topology, each device is connected to a central device such as a switch.",
    difficulty: "Easy",
    topic: "Network Topologies"
  },

  {
    question: "Which topology uses a single shared communication backbone?",
    options: [
      "Star",
      "Mesh",
      "Bus",
      "Ring"
    ],
    correctAnswer: 2,
    explanation:
      "A bus topology uses a shared backbone cable to which network devices are connected.",
    difficulty: "Easy",
    topic: "Network Topologies"
  },

  {
    question: "Which topology connects devices in a circular arrangement?",
    options: [
      "Ring",
      "Star",
      "Bus",
      "Tree"
    ],
    correctAnswer: 0,
    explanation:
      "In a ring topology, devices are connected in a circular or ring-like arrangement.",
    difficulty: "Easy",
    topic: "Network Topologies"
  },

  {
    question: "How many layers are present in the OSI reference model?",
    options: [
      "4",
      "5",
      "7",
      "8"
    ],
    correctAnswer: 2,
    explanation:
      "The OSI model has seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.",
    difficulty: "Easy",
    topic: "OSI Model"
  },

  {
    question: "Which is the lowest layer of the OSI model?",
    options: [
      "Data Link",
      "Physical",
      "Network",
      "Transport"
    ],
    correctAnswer: 1,
    explanation:
      "The Physical layer is the lowest layer of the OSI model and deals with transmission of raw bits over a physical medium.",
    difficulty: "Easy",
    topic: "OSI Model"
  },

  {
    question: "Which OSI layer is responsible for logical addressing?",
    options: [
      "Physical",
      "Data Link",
      "Network",
      "Session"
    ],
    correctAnswer: 2,
    explanation:
      "The Network layer handles logical addressing such as IP addresses and routing.",
    difficulty: "Easy",
    topic: "OSI Model"
  },

  {
    question: "Which OSI layer is responsible for end-to-end delivery?",
    options: [
      "Transport",
      "Network",
      "Data Link",
      "Physical"
    ],
    correctAnswer: 0,
    explanation:
      "The Transport layer provides end-to-end communication services between applications on different hosts.",
    difficulty: "Easy",
    topic: "OSI Model"
  },

  {
    question: "Which OSI layer is responsible for framing?",
    options: [
      "Network",
      "Data Link",
      "Transport",
      "Application"
    ],
    correctAnswer: 1,
    explanation:
      "The Data Link layer organizes bits into frames and provides node-to-node delivery over a local link.",
    difficulty: "Easy",
    topic: "OSI Model"
  },

  {
    question: "Which OSI layer is closest to the end user?",
    options: [
      "Physical",
      "Transport",
      "Application",
      "Network"
    ],
    correctAnswer: 2,
    explanation:
      "The Application layer is the top layer of the OSI model and provides network services to applications.",
    difficulty: "Easy",
    topic: "OSI Model"
  },

  {
    question: "What is the main purpose of the TCP/IP model?",
    options: [
      "To define a practical architecture for Internet communication",
      "To replace programming languages",
      "To manage computer memory",
      "To control CPU scheduling"
    ],
    correctAnswer: 0,
    explanation:
      "The TCP/IP model describes the protocols and architecture used for communication across the Internet and interconnected networks.",
    difficulty: "Easy",
    topic: "TCP/IP Model"
  },

  {
    question: "Which protocol provides reliable, connection-oriented communication?",
    options: [
      "UDP",
      "TCP",
      "IP",
      "ARP"
    ],
    correctAnswer: 1,
    explanation:
      "TCP provides connection-oriented, reliable, ordered delivery of data.",
    difficulty: "Easy",
    topic: "TCP and UDP"
  },

  {
    question: "Which protocol is connectionless?",
    options: [
      "TCP",
      "UDP",
      "FTP",
      "SSH"
    ],
    correctAnswer: 1,
    explanation:
      "UDP is a connectionless transport protocol that does not establish a connection before sending datagrams.",
    difficulty: "Easy",
    topic: "TCP and UDP"
  },

  {
    question: "Which protocol generally has lower overhead and is commonly used for real-time applications?",
    options: [
      "TCP",
      "UDP",
      "HTTP",
      "FTP"
    ],
    correctAnswer: 1,
    explanation:
      "UDP has lower protocol overhead and is often used for applications such as streaming, online gaming, and real-time communication where low latency is important.",
    difficulty: "Medium",
    topic: "TCP and UDP"
  },

  {
    question: "What does IP stand for?",
    options: [
      "Internet Protocol",
      "Internal Protocol",
      "Internet Process",
      "Interface Protocol"
    ],
    correctAnswer: 0,
    explanation:
      "IP stands for Internet Protocol and provides addressing and packet delivery across interconnected networks.",
    difficulty: "Easy",
    topic: "IP Addressing"
  },

  {
    question: "What is the size of an IPv4 address?",
    options: [
      "16 bits",
      "32 bits",
      "64 bits",
      "128 bits"
    ],
    correctAnswer: 1,
    explanation:
      "An IPv4 address is 32 bits long and is commonly represented using four decimal octets.",
    difficulty: "Easy",
    topic: "IP Addressing"
  },

  {
    question: "What is the size of an IPv6 address?",
    options: [
      "32 bits",
      "64 bits",
      "96 bits",
      "128 bits"
    ],
    correctAnswer: 3,
    explanation:
      "An IPv6 address is 128 bits long, providing a much larger address space than IPv4.",
    difficulty: "Easy",
    topic: "IP Addressing"
  },

  {
    question: "Which of the following is a valid IPv4 address?",
    options: [
      "192.168.1.10",
      "192.168.1.300",
      "10.10.10",
      "256.1.1.1"
    ],
    correctAnswer: 0,
    explanation:
      "192.168.1.10 is a valid IPv4 address. Each IPv4 octet must be between 0 and 255.",
    difficulty: "Easy",
    topic: "IP Addressing"
  },

  {
    question: "Which IPv4 address range is commonly used for private networks?",
    options: [
      "8.8.8.0/24",
      "192.168.0.0/16",
      "1.1.1.0/24",
      "172.0.0.0/8"
    ],
    correctAnswer: 1,
    explanation:
      "192.168.0.0/16 is one of the private IPv4 address ranges defined for private networks.",
    difficulty: "Easy",
    topic: "Private IP Addresses"
  },

  {
    question: "Which of the following is also a private IPv4 range?",
    options: [
      "10.0.0.0/8",
      "8.0.0.0/8",
      "11.0.0.0/8",
      "100.0.0.0/8"
    ],
    correctAnswer: 0,
    explanation:
      "10.0.0.0/8 is a private IPv4 address range.",
    difficulty: "Easy",
    topic: "Private IP Addresses"
  },

  {
    question: "What is the purpose of a subnet mask?",
    options: [
      "To identify network and host portions of an IP address",
      "To encrypt packets",
      "To assign MAC addresses",
      "To convert domain names"
    ],
    correctAnswer: 0,
    explanation:
      "A subnet mask determines which bits of an IPv4 address represent the network portion and which represent the host portion.",
    difficulty: "Easy",
    topic: "Subnetting"
  },

  {
    question: "What does DNS stand for?",
    options: [
      "Domain Name System",
      "Data Network Service",
      "Digital Name Server",
      "Domain Network Security"
    ],
    correctAnswer: 0,
    explanation:
      "DNS stands for Domain Name System and translates domain names into IP addresses and other DNS records.",
    difficulty: "Easy",
    topic: "DNS"
  },

  {
    question: "What is the main purpose of DNS?",
    options: [
      "To translate domain names into IP addresses",
      "To encrypt network traffic",
      "To assign MAC addresses",
      "To transfer files"
    ],
    correctAnswer: 0,
    explanation:
      "DNS translates human-readable domain names such as example.com into IP addresses used for network communication.",
    difficulty: "Easy",
    topic: "DNS"
  },

  {
    question: "Which protocol is commonly used to automatically assign IP addresses to devices?",
    options: [
      "DNS",
      "DHCP",
      "FTP",
      "SMTP"
    ],
    correctAnswer: 1,
    explanation:
      "DHCP automatically provides network configuration such as IP addresses, subnet masks, gateways, and DNS servers to clients.",
    difficulty: "Easy",
    topic: "DHCP"
  },

  {
    question: "What does DHCP stand for?",
    options: [
      "Dynamic Host Configuration Protocol",
      "Dynamic Host Control Protocol",
      "Data Host Configuration Process",
      "Domain Host Configuration Protocol"
    ],
    correctAnswer: 0,
    explanation:
      "DHCP stands for Dynamic Host Configuration Protocol.",
    difficulty: "Easy",
    topic: "DHCP"
  },

  {
    question: "Which protocol is used to map an IPv4 address to a MAC address on a local network?",
    options: [
      "DNS",
      "ARP",
      "DHCP",
      "ICMP"
    ],
    correctAnswer: 1,
    explanation:
      "ARP, or Address Resolution Protocol, resolves an IPv4 address to a corresponding MAC address on a local network.",
    difficulty: "Easy",
    topic: "ARP"
  },

  {
    question: "What does MAC stand for in networking?",
    options: [
      "Media Access Control",
      "Machine Access Code",
      "Media Address Configuration",
      "Main Access Controller"
    ],
    correctAnswer: 0,
    explanation:
      "MAC stands for Media Access Control. A MAC address identifies a network interface at the Data Link layer.",
    difficulty: "Easy",
    topic: "MAC Address"
  },

  {
    question: "How long is a typical MAC address?",
    options: [
      "32 bits",
      "48 bits",
      "64 bits",
      "128 bits"
    ],
    correctAnswer: 1,
    explanation:
      "A standard MAC address is 48 bits long and is commonly written as six hexadecimal bytes.",
    difficulty: "Easy",
    topic: "MAC Address"
  },

  {
    question: "Which protocol is used to send email between mail servers?",
    options: [
      "HTTP",
      "SMTP",
      "FTP",
      "DHCP"
    ],
    correctAnswer: 1,
    explanation:
      "SMTP, or Simple Mail Transfer Protocol, is commonly used to send email between mail servers and from clients to mail servers.",
    difficulty: "Easy",
    topic: "Application Protocols"
  },

  {
    question: "Which protocol is commonly used to transfer files between a client and server?",
    options: [
      "FTP",
      "SMTP",
      "DNS",
      "ARP"
    ],
    correctAnswer: 0,
    explanation:
      "FTP stands for File Transfer Protocol and is designed for transferring files between systems.",
    difficulty: "Easy",
    topic: "Application Protocols"
  },

  {
    question: "Which protocol is used for secure remote login and command-line access?",
    options: [
      "Telnet",
      "SSH",
      "FTP",
      "HTTP"
    ],
    correctAnswer: 1,
    explanation:
      "SSH provides encrypted remote login and secure command-line access over a network.",
    difficulty: "Easy",
    topic: "Network Security"
  },

  {
    question: "What is the main difference between HTTP and HTTPS?",
    options: [
      "HTTPS uses encryption through TLS",
      "HTTP is faster because it uses encryption",
      "HTTPS does not use TCP",
      "HTTP can only be used on private networks"
    ],
    correctAnswer: 0,
    explanation:
      "HTTPS is HTTP protected using TLS, providing encryption and authentication for the connection.",
    difficulty: "Easy",
    topic: "HTTP and HTTPS"
  },

  {
    question: "Which port is commonly associated with HTTP?",
    options: [
      "21",
      "25",
      "80",
      "443"
    ],
    correctAnswer: 2,
    explanation:
      "TCP port 80 is conventionally associated with HTTP.",
    difficulty: "Easy",
    topic: "Ports"
  },

  {
    question: "Which port is commonly associated with HTTPS?",
    options: [
      "22",
      "53",
      "80",
      "443"
    ],
    correctAnswer: 3,
    explanation:
      "TCP port 443 is conventionally associated with HTTPS.",
    difficulty: "Easy",
    topic: "Ports"
  },

  {
    question: "Which port is commonly associated with DNS?",
    options: [
      "25",
      "53",
      "80",
      "110"
    ],
    correctAnswer: 1,
    explanation:
      "DNS commonly uses port 53 for both UDP and TCP depending on the type of DNS traffic.",
    difficulty: "Easy",
    topic: "Ports"
  },

  {
    question: "What is a firewall?",
    options: [
      "A device or software that controls network traffic based on security rules",
      "A device used only to increase network speed",
      "A protocol for file transfer",
      "A type of network cable"
    ],
    correctAnswer: 0,
    explanation:
      "A firewall monitors and controls network traffic according to configured security rules.",
    difficulty: "Easy",
    topic: "Network Security"
  },

  {
    question: "What is network latency?",
    options: [
      "The amount of data transferred per second",
      "The time taken for data to travel from source to destination",
      "The number of devices in a network",
      "The size of an IP address"
    ],
    correctAnswer: 1,
    explanation:
      "Network latency is the time delay involved in transmitting data between endpoints.",
    difficulty: "Easy",
    topic: "Network Performance"
  },

  {
    question: "What is bandwidth?",
    options: [
      "The maximum data transfer capacity of a network link",
      "The physical length of a cable",
      "The IP address of a router",
      "The number of network users"
    ],
    correctAnswer: 0,
    explanation:
      "Bandwidth represents the maximum data-carrying capacity of a network connection, typically measured in bits per second.",
    difficulty: "Easy",
    topic: "Network Performance"
  },

  {
    question: "What is packet switching?",
    options: [
      "A method of sending data by dividing it into packets",
      "A method of assigning MAC addresses",
      "A method of encrypting passwords",
      "A method of creating IP addresses"
    ],
    correctAnswer: 0,
    explanation:
      "Packet switching divides data into packets that can be transmitted independently across a network.",
    difficulty: "Easy",
    topic: "Data Transmission"
  },

  {
    question: "Which protocol is commonly used to test network reachability?",
    options: [
      "ICMP",
      "FTP",
      "SMTP",
      "ARP"
    ],
    correctAnswer: 0,
    explanation:
      "ICMP is used for network control and diagnostic functions. The ping utility commonly uses ICMP Echo messages.",
    difficulty: "Medium",
    topic: "ICMP"
  },

  {
    question: "Which command is commonly used to test connectivity to another host?",
    options: [
      "ping",
      "mkdir",
      "copy",
      "format"
    ],
    correctAnswer: 0,
    explanation:
      "The ping command sends test packets, commonly ICMP Echo messages, to check whether a host is reachable.",
    difficulty: "Easy",
    topic: "Network Commands"
  },

  {
    question: "Which command is commonly used to display the route packets take to a destination?",
    options: [
      "traceroute",
      "mkdir",
      "hostname",
      "clear"
    ],
    correctAnswer: 0,
    explanation:
      "traceroute on many Unix-like systems, and tracert on Windows, can show the network hops toward a destination.",
    difficulty: "Easy",
    topic: "Network Commands"
  },

  {
    question: "What is NAT commonly used for?",
    options: [
      "Translating private and public IP addresses",
      "Encrypting passwords",
      "Resolving domain names",
      "Creating MAC addresses"
    ],
    correctAnswer: 0,
    explanation:
      "Network Address Translation (NAT) translates IP addresses between different address spaces and is commonly used to allow private hosts to access external networks using public addresses.",
    difficulty: "Medium",
    topic: "NAT"
  },

  {
    question: "Which protocol provides reliable ordered delivery and uses acknowledgments?",
    options: [
      "UDP",
      "TCP",
      "IP",
      "ICMP"
    ],
    correctAnswer: 1,
    explanation:
      "TCP provides reliable, ordered byte-stream delivery using mechanisms such as sequence numbers and acknowledgments.",
    difficulty: "Medium",
    topic: "TCP"
  },

  {
    question: "What is the three-way handshake used by TCP for?",
    options: [
      "Closing a connection",
      "Establishing a connection",
      "Assigning an IP address",
      "Resolving a domain name"
    ],
    correctAnswer: 1,
    explanation:
      "TCP uses a three-way handshake to establish a connection between two endpoints before data transfer.",
    difficulty: "Medium",
    topic: "TCP"
  },

  {
    question: "Which sequence correctly represents the TCP three-way handshake?",
    options: [
      "ACK → ACK → SYN",
      "SYN → SYN-ACK → ACK",
      "SYN → FIN → ACK",
      "FIN → SYN → ACK"
    ],
    correctAnswer: 1,
    explanation:
      "A typical TCP connection starts with SYN, followed by SYN-ACK, and then ACK.",
    difficulty: "Medium",
    topic: "TCP"
  },

  {
    question: "What is a socket in computer networking?",
    options: [
      "An endpoint for communication identified by an IP address and port",
      "A type of network cable",
      "A physical router port only",
      "A DNS record"
    ],
    correctAnswer: 0,
    explanation:
      "A socket represents a communication endpoint and is commonly associated with an IP address and port number.",
    difficulty: "Medium",
    topic: "Sockets"
  },

  {
    question: "Which layer of the TCP/IP model is responsible for routing IP packets?",
    options: [
      "Application",
      "Transport",
      "Internet",
      "Network Access"
    ],
    correctAnswer: 2,
    explanation:
      "The Internet layer of the TCP/IP model handles IP addressing and routing of packets between networks.",
    difficulty: "Medium",
    topic: "TCP/IP Model"
  }
];

module.exports = computerNetworksQuestions;