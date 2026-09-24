const operatingSystemQuestions = [
  {
    question: "What is an Operating System?",
    options: [
      "System software that manages computer hardware and software resources",
      "A programming language",
      "A database management system",
      "A web browser"
    ],
    correctAnswer: 0,
    explanation:
      "An Operating System is system software that manages hardware resources and provides services to application programs.",
    difficulty: "Easy",
    topic: "OS Basics"
  },
  {
    question: "Which of the following is an example of an Operating System?",
    options: [
      "Microsoft Word",
      "Linux",
      "Google Chrome",
      "MySQL"
    ],
    correctAnswer: 1,
    explanation:
      "Linux is an Operating System. Windows, macOS, Android, and Unix are other examples.",
    difficulty: "Easy",
    topic: "OS Basics"
  },
  {
    question: "Which of the following is NOT an Operating System?",
    options: [
      "Windows",
      "Linux",
      "Android",
      "Microsoft Excel"
    ],
    correctAnswer: 3,
    explanation:
      "Microsoft Excel is an application software, not an Operating System.",
    difficulty: "Easy",
    topic: "OS Basics"
  },
  {
    question: "What is the primary purpose of an Operating System?",
    options: [
      "To manage resources and provide an interface between users and hardware",
      "To create websites",
      "To store only images",
      "To compile every programming language"
    ],
    correctAnswer: 0,
    explanation:
      "The OS manages CPU, memory, storage, devices, processes, and provides services for applications and users.",
    difficulty: "Easy",
    topic: "OS Functions"
  },
  {
    question: "Which component of an Operating System directly manages hardware resources?",
    options: [
      "Kernel",
      "Browser",
      "Compiler",
      "Text editor"
    ],
    correctAnswer: 0,
    explanation:
      "The kernel is the core part of an OS responsible for managing hardware and system resources.",
    difficulty: "Easy",
    topic: "Kernel"
  },
  {
    question: "What is a kernel?",
    options: [
      "The core component of an Operating System",
      "A user application",
      "A database table",
      "A programming language"
    ],
    correctAnswer: 0,
    explanation:
      "The kernel is the central component of an OS that manages CPU, memory, processes, devices, and other system resources.",
    difficulty: "Easy",
    topic: "Kernel"
  },
  {
    question: "What is a process?",
    options: [
      "A program that is currently executing",
      "A file stored on disk",
      "A CPU instruction only",
      "A memory address"
    ],
    correctAnswer: 0,
    explanation:
      "A process is a program in execution along with its current state and allocated resources.",
    difficulty: "Easy",
    topic: "Processes"
  },
  {
    question: "What is a program?",
    options: [
      "A passive set of instructions stored on a storage device",
      "A running process",
      "A CPU register",
      "A memory page"
    ],
    correctAnswer: 0,
    explanation:
      "A program is a passive collection of instructions, while a process is a program in execution.",
    difficulty: "Easy",
    topic: "Processes"
  },
  {
    question: "Which data structure is commonly used by an OS to manage processes?",
    options: [
      "Process Control Block",
      "File Control Block only",
      "Stack only",
      "Page Table only"
    ],
    correctAnswer: 0,
    explanation:
      "The Process Control Block (PCB) stores important information about a process, such as its state, PID, registers, and scheduling information.",
    difficulty: "Medium",
    topic: "Process Management"
  },
  {
    question: "What does PCB stand for?",
    options: [
      "Process Control Block",
      "Program Control Base",
      "Process Code Buffer",
      "Program Control Block"
    ],
    correctAnswer: 0,
    explanation:
      "PCB stands for Process Control Block, a data structure used by the OS to store process information.",
    difficulty: "Easy",
    topic: "Process Management"
  },
  {
    question: "Which process state means that a process is currently executing on the CPU?",
    options: [
      "Ready",
      "Running",
      "Waiting",
      "New"
    ],
    correctAnswer: 1,
    explanation:
      "A process in the Running state is currently being executed by a CPU.",
    difficulty: "Easy",
    topic: "Process States"
  },
  {
    question: "Which process state means that a process is waiting for CPU allocation?",
    options: [
      "Running",
      "Ready",
      "Terminated",
      "Blocked"
    ],
    correctAnswer: 1,
    explanation:
      "A process in the Ready state is prepared to execute but is waiting for CPU time.",
    difficulty: "Easy",
    topic: "Process States"
  },
  {
    question: "Which process state means that a process is waiting for an event or I/O operation?",
    options: [
      "Ready",
      "Running",
      "Waiting",
      "New"
    ],
    correctAnswer: 2,
    explanation:
      "A waiting or blocked process cannot continue until the required event or I/O operation completes.",
    difficulty: "Easy",
    topic: "Process States"
  },
  {
    question: "What is a context switch?",
    options: [
      "Saving the state of one process and loading the state of another",
      "Changing the operating system",
      "Changing a file extension",
      "Formatting memory"
    ],
    correctAnswer: 0,
    explanation:
      "A context switch occurs when the CPU switches from one process or thread to another by saving and restoring execution state.",
    difficulty: "Medium",
    topic: "Process Scheduling"
  },
  {
    question: "What is multitasking?",
    options: [
      "Running multiple tasks seemingly at the same time",
      "Using only one application",
      "Running without an OS",
      "Using multiple hard disks"
    ],
    correctAnswer: 0,
    explanation:
      "Multitasking allows multiple processes or tasks to make progress concurrently through CPU scheduling.",
    difficulty: "Easy",
    topic: "Multitasking"
  },
  {
    question: "What is a thread?",
    options: [
      "The smallest unit of CPU execution within a process",
      "A hard disk partition",
      "A database record",
      "A type of file"
    ],
    correctAnswer: 0,
    explanation:
      "A thread is a unit of execution within a process. Threads of the same process share many process resources.",
    difficulty: "Easy",
    topic: "Threads"
  },
  {
    question: "What is multithreading?",
    options: [
      "Executing multiple threads within a process",
      "Using multiple operating systems",
      "Creating multiple hard disks",
      "Running multiple databases"
    ],
    correctAnswer: 0,
    explanation:
      "Multithreading allows a process to contain multiple threads that can execute concurrently.",
    difficulty: "Easy",
    topic: "Threads"
  },
  {
    question: "Which scheduling algorithm executes processes in the order they arrive?",
    options: [
      "FCFS",
      "Round Robin",
      "SJF",
      "Priority Scheduling"
    ],
    correctAnswer: 0,
    explanation:
      "First-Come, First-Served (FCFS) schedules processes according to their arrival order.",
    difficulty: "Easy",
    topic: "CPU Scheduling"
  },
  {
    question: "What does FCFS stand for?",
    options: [
      "First-Come, First-Served",
      "First-Central File System",
      "Fast CPU File Scheduling",
      "First-Cycle First-System"
    ],
    correctAnswer: 0,
    explanation:
      "FCFS stands for First-Come, First-Served.",
    difficulty: "Easy",
    topic: "CPU Scheduling"
  },
  {
    question: "Which CPU scheduling algorithm uses a fixed time quantum?",
    options: [
      "FCFS",
      "Round Robin",
      "SJF",
      "FIFO only"
    ],
    correctAnswer: 1,
    explanation:
      "Round Robin scheduling assigns each ready process a fixed time quantum in a cyclic order.",
    difficulty: "Easy",
    topic: "CPU Scheduling"
  },
  {
    question: "Which scheduling algorithm selects the process with the shortest estimated CPU burst?",
    options: [
      "FCFS",
      "SJF",
      "Round Robin",
      "FIFO"
    ],
    correctAnswer: 1,
    explanation:
      "Shortest Job First (SJF) selects the process with the shortest estimated CPU burst.",
    difficulty: "Easy",
    topic: "CPU Scheduling"
  },
  {
    question: "What is starvation in Operating Systems?",
    options: [
      "A process waits indefinitely because other processes keep getting resources",
      "A process finishes too quickly",
      "A memory page is deleted",
      "The CPU is permanently damaged"
    ],
    correctAnswer: 0,
    explanation:
      "Starvation occurs when a process waits for an unreasonably long time because resources or CPU time are repeatedly allocated to other processes.",
    difficulty: "Medium",
    topic: "CPU Scheduling"
  },
  {
    question: "Which technique can help prevent starvation?",
    options: [
      "Aging",
      "Increasing file size",
      "Disabling interrupts",
      "Deleting processes"
    ],
    correctAnswer: 0,
    explanation:
      "Aging gradually increases the priority of waiting processes, reducing the possibility of indefinite starvation.",
    difficulty: "Medium",
    topic: "CPU Scheduling"
  },
  {
    question: "What is a race condition?",
    options: [
      "A situation where the result depends on the timing or order of concurrent operations",
      "A CPU overheating problem",
      "A disk formatting error",
      "A network routing problem"
    ],
    correctAnswer: 0,
    explanation:
      "A race condition can occur when multiple processes or threads access shared data concurrently and the outcome depends on their execution timing.",
    difficulty: "Medium",
    topic: "Synchronization"
  },
  {
    question: "What is a critical section?",
    options: [
      "A section of code that accesses shared resources",
      "A section of disk storage",
      "A CPU cache",
      "A bootloader component"
    ],
    correctAnswer: 0,
    explanation:
      "A critical section is code that accesses shared resources and therefore may require synchronization.",
    difficulty: "Medium",
    topic: "Synchronization"
  },
  {
    question: "Which mechanism is commonly used to control access to a critical section?",
    options: [
      "Mutex",
      "Compiler",
      "Loader",
      "Cache"
    ],
    correctAnswer: 0,
    explanation:
      "A mutex provides mutual exclusion so that only one thread can hold the lock and enter the protected critical section at a time.",
    difficulty: "Medium",
    topic: "Synchronization"
  },
  {
    question: "What is a semaphore?",
    options: [
      "A synchronization mechanism used to control access to shared resources",
      "A type of CPU",
      "A file system",
      "A programming language"
    ],
    correctAnswer: 0,
    explanation:
      "A semaphore is a synchronization primitive used to coordinate access to shared resources among concurrent processes or threads.",
    difficulty: "Medium",
    topic: "Synchronization"
  },
  {
    question: "What is deadlock?",
    options: [
      "A state where processes wait indefinitely for resources held by each other",
      "A process completing successfully",
      "A CPU running at full speed",
      "A file being deleted"
    ],
    correctAnswer: 0,
    explanation:
      "Deadlock occurs when a group of processes are permanently blocked because each is waiting for a resource held by another process in the group.",
    difficulty: "Easy",
    topic: "Deadlock"
  },
  {
    question: "Which of the following is a necessary condition for deadlock?",
    options: [
      "Mutual exclusion",
      "Unlimited resources",
      "No resource sharing",
      "Immediate preemption"
    ],
    correctAnswer: 0,
    explanation:
      "The four Coffman conditions are mutual exclusion, hold and wait, no preemption, and circular wait.",
    difficulty: "Medium",
    topic: "Deadlock"
  },
  {
    question: "Which of the following is NOT one of the four necessary conditions for deadlock?",
    options: [
      "Mutual exclusion",
      "Hold and wait",
      "Circular wait",
      "Priority scheduling"
    ],
    correctAnswer: 3,
    explanation:
      "Priority scheduling is not one of the four Coffman conditions for deadlock.",
    difficulty: "Medium",
    topic: "Deadlock"
  },
  {
    question: "Which algorithm is used for deadlock avoidance?",
    options: [
      "Banker's Algorithm",
      "FCFS",
      "Round Robin",
      "Binary Search"
    ],
    correctAnswer: 0,
    explanation:
      "Banker's Algorithm is a classic deadlock avoidance algorithm that checks whether resource allocation keeps the system in a safe state.",
    difficulty: "Medium",
    topic: "Deadlock"
  },
  {
    question: "What is virtual memory?",
    options: [
      "A memory management technique that allows disk storage to extend the apparent memory available to processes",
      "A physical RAM chip",
      "A CPU register",
      "A type of cache only"
    ],
    correctAnswer: 0,
    explanation:
      "Virtual memory provides processes with a logical address space that can be larger than physical RAM, using secondary storage when needed.",
    difficulty: "Medium",
    topic: "Memory Management"
  },
  {
    question: "What is paging?",
    options: [
      "A memory management technique that divides memory into fixed-size pages and frames",
      "A file compression method",
      "A CPU scheduling algorithm",
      "A disk formatting method"
    ],
    correctAnswer: 0,
    explanation:
      "Paging divides a process's virtual memory into fixed-size pages and physical memory into fixed-size frames.",
    difficulty: "Medium",
    topic: "Memory Management"
  },
  {
    question: "What is a page fault?",
    options: [
      "An event that occurs when a required page is not currently in physical memory",
      "A corrupted hard disk",
      "A CPU instruction error",
      "A network failure"
    ],
    correctAnswer: 0,
    explanation:
      "A page fault occurs when a process references a page that is not currently loaded in physical memory, requiring the OS to retrieve it.",
    difficulty: "Medium",
    topic: "Virtual Memory"
  },
  {
    question: "Which page replacement algorithm removes the page that has not been used for the longest time?",
    options: [
      "FIFO",
      "LRU",
      "Optimal",
      "Random"
    ],
    correctAnswer: 1,
    explanation:
      "LRU, or Least Recently Used, replaces the page that has not been accessed for the longest period among the candidate pages.",
    difficulty: "Medium",
    topic: "Page Replacement"
  },
  {
    question: "What does FIFO stand for in page replacement?",
    options: [
      "First In, First Out",
      "Fast Input, Fast Output",
      "File In, File Out",
      "First Instruction, First Operation"
    ],
    correctAnswer: 0,
    explanation:
      "FIFO stands for First In, First Out and replaces the page that entered memory first.",
    difficulty: "Easy",
    topic: "Page Replacement"
  },
  {
    question: "What is fragmentation?",
    options: [
      "Wasted memory space caused by the way memory is allocated",
      "A type of CPU scheduling",
      "A network protocol",
      "A file encryption method"
    ],
    correctAnswer: 0,
    explanation:
      "Fragmentation occurs when memory is divided or allocated in ways that leave unusable or inefficiently usable space.",
    difficulty: "Easy",
    topic: "Memory Management"
  },
  {
    question: "What is internal fragmentation?",
    options: [
      "Unused space inside an allocated memory block",
      "Unused space between allocated blocks only",
      "A disk failure",
      "A CPU scheduling problem"
    ],
    correctAnswer: 0,
    explanation:
      "Internal fragmentation is wasted space inside an allocated block because the allocated block is larger than the requested amount.",
    difficulty: "Medium",
    topic: "Memory Management"
  },
  {
    question: "What is external fragmentation?",
    options: [
      "Free memory exists but is split into small non-contiguous blocks",
      "Unused space inside a fixed-size block",
      "A CPU error",
      "A process termination"
    ],
    correctAnswer: 0,
    explanation:
      "External fragmentation occurs when sufficient total free memory exists but it is scattered across non-contiguous blocks.",
    difficulty: "Medium",
    topic: "Memory Management"
  },
  {
    question: "What is a file system?",
    options: [
      "A method used by an OS to organize and manage files and directories on storage",
      "A CPU component",
      "A programming language",
      "A network cable"
    ],
    correctAnswer: 0,
    explanation:
      "A file system defines how files and directories are stored, named, organized, and accessed on storage devices.",
    difficulty: "Easy",
    topic: "File Systems"
  },
  {
    question: "Which of the following is a file system commonly associated with Linux?",
    options: [
      "ext4",
      "NTFS only",
      "FAT12 only",
      "HFS only"
    ],
    correctAnswer: 0,
    explanation:
      "ext4 is a commonly used Linux file system.",
    difficulty: "Easy",
    topic: "File Systems"
  },
  {
    question: "Which file system is commonly used by modern Windows systems?",
    options: [
      "NTFS",
      "ext4",
      "APFS",
      "HFS+"
    ],
    correctAnswer: 0,
    explanation:
      "NTFS is the primary file system commonly used by modern Windows installations.",
    difficulty: "Easy",
    topic: "File Systems"
  },
  {
    question: "What is a system call?",
    options: [
      "An interface through which a user program requests a service from the OS kernel",
      "A database query",
      "A compiler warning",
      "A network packet"
    ],
    correctAnswer: 0,
    explanation:
      "System calls provide a controlled interface for programs to request OS services such as file access, process creation, and memory management.",
    difficulty: "Medium",
    topic: "System Calls"
  },
  {
    question: "Which system call concept is commonly associated with creating a new process in Unix-like systems?",
    options: [
      "fork()",
      "createProcessOnly()",
      "newProcess()",
      "spawnOS()"
    ],
    correctAnswer: 0,
    explanation:
      "In Unix-like systems, fork() creates a new process by duplicating the calling process's execution context.",
    difficulty: "Medium",
    topic: "System Calls"
  },
  {
    question: "What is a shell?",
    options: [
      "A command interpreter that provides an interface to OS services",
      "A hardware component",
      "A database",
      "A CPU cache"
    ],
    correctAnswer: 0,
    explanation:
      "A shell interprets user commands and provides an interface for interacting with the Operating System.",
    difficulty: "Easy",
    topic: "Shell"
  },
  {
    question: "Which of the following is a Unix/Linux shell?",
    options: [
      "Bash",
      "Chrome",
      "MySQL",
      "Excel"
    ],
    correctAnswer: 0,
    explanation:
      "Bash is a widely used Unix/Linux command-line shell.",
    difficulty: "Easy",
    topic: "Shell"
  },
  {
    question: "What is booting?",
    options: [
      "The process of starting a computer and loading the Operating System",
      "Deleting the OS",
      "Installing a web browser",
      "Formatting a document"
    ],
    correctAnswer: 0,
    explanation:
      "Booting is the process of starting the computer and loading the operating system into memory.",
    difficulty: "Easy",
    topic: "Boot Process"
  },
  {
    question: "What is a bootloader?",
    options: [
      "A program that loads or helps load the Operating System",
      "A text editor",
      "A database engine",
      "A web server"
    ],
    correctAnswer: 0,
    explanation:
      "A bootloader initializes the boot process and loads the operating system kernel or another boot stage.",
    difficulty: "Easy",
    topic: "Boot Process"
  },
  {
    question: "What is a device driver?",
    options: [
      "Software that allows the OS to communicate with a hardware device",
      "A CPU register",
      "A database table",
      "A browser extension"
    ],
    correctAnswer: 0,
    explanation:
      "A device driver provides the software interface required for the OS to communicate with specific hardware devices.",
    difficulty: "Easy",
    topic: "Device Management"
  },
  {
    question: "What is IPC in Operating Systems?",
    options: [
      "Inter-Process Communication",
      "Internal Program Compilation",
      "Internet Process Control",
      "Input Process Cache"
    ],
    correctAnswer: 0,
    explanation:
      "IPC stands for Inter-Process Communication and refers to mechanisms that allow processes to exchange data and coordinate with each other.",
    difficulty: "Easy",
    topic: "IPC"
  },
  {
    question: "Which of the following is an IPC mechanism?",
    options: [
      "Pipe",
      "Compiler",
      "CPU register",
      "Keyboard driver only"
    ],
    correctAnswer: 0,
    explanation:
      "Pipes are an IPC mechanism that can allow processes to communicate through a stream of data.",
    difficulty: "Easy",
    topic: "IPC"
  },
  {
    question: "What is a zombie process?",
    options: [
      "A terminated process whose exit status has not yet been collected by its parent",
      "A process using all CPU resources",
      "A process waiting for memory",
      "A process that is always running"
    ],
    correctAnswer: 0,
    explanation:
      "A zombie process has finished execution but remains in the process table until its parent collects its termination status.",
    difficulty: "Hard",
    topic: "Processes"
  },
  {
    question: "What is an orphan process?",
    options: [
      "A process whose parent has terminated while the process is still running",
      "A process that has no memory",
      "A process that has finished normally",
      "A process with no CPU"
    ],
    correctAnswer: 0,
    explanation:
      "An orphan process is a running process whose original parent has terminated. In Unix-like systems, it is typically adopted by another system process.",
    difficulty: "Hard",
    topic: "Processes"
  },
  {
    question: "Which scheduling approach allows a running process to be interrupted and replaced by another process?",
    options: [
      "Preemptive scheduling",
      "Non-preemptive scheduling",
      "Static scheduling",
      "Sequential scheduling"
    ],
    correctAnswer: 0,
    explanation:
      "In preemptive scheduling, the OS can interrupt a running process and allocate the CPU to another ready process.",
    difficulty: "Medium",
    topic: "CPU Scheduling"
  }
];

module.exports = operatingSystemQuestions;