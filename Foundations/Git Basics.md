## Introduction to Git

#### About Version Control

- version control
  - a system that records changes to a file or set of files over time so that you can recall specific versions later
  - allows you to revert selected files back to a previous state, revert the entire project back to a previous state, compare changes over time, see who modified something that might be causing a problem, who introduced an issue and when, and more
- local version control systems
  - RCS - keeping patch sets in a special format on disk, it can then re-create what any file looked like at any point in time by adding up all the patches
- centralized version control
  - systems that have a single server that contains all the versioned files, and a number of clients that check out files from that central place
  - everyone knows to a certain degree what everyone else on the project is doing
  - downsides - if the server goes down, then nobody during that time period can work  and if the central database become corrupted, everything is absolutely lost
- distributed version control systems
  - clients don't just check out the latest snapshot of th e files; rather they fully mirror the repository including its full history
  - collaborate with different groups of people in different ways simultaneously within the same project


#### Short History of Git

- the destruction between the relationship of BitKeeper and Linux, prompted the Linux development community to develop their own tool
- git has evovled and matured to be easy to use and has adopted a branching system for nonlinear development


#### What is Git?

##### Snapshots, Not Differences

- git thinks of its data more like a series of snapshots on a miniature filesystem
- git takes a picture of what all your files look like at that moment and stores a reference to that snapshot
- if files have not changes, git does not store the file again, just a link to the previous identical file it has already stored

##### Nearly every Operation is Local

- most operations in git need only local files and resources to operate
- to browse the history of the project, git does not need to go out to the server to get the distory and display it for you - it simply reads it directly from your local database
- work can be done completely offline

##### Git has Integrity

- it is impossible to change the contents of any files or directory without git knowing about it

##### Git generally only adds data

- it is very difficult to get the system to do anything that is not undoable or to make it erase data in any way

##### The 3 states

- modified - you have changed a file but have not committed it to your database yet
- staged - you have marked a modified file in its current version to go into your next commit snapshot
- committed - data is safely stored in your local database


#### Exercises

##### 1. What kind of program is Git?

- a distributed version control system

##### 2. What are the differences between Git and a text editor in terms of what they save and their record keeping?

- a save in a text editor records oll of the changes in a document as a single file
- a save in git records the differences in the files and folders and keeps a historical record of each save

##### 3. Does git work at a local or remote level?

- local level

##### 4. Does github work at a local or remote level?

- remote level

##### 5. Why is git useful for developers?

- allows you to revert selected files back to a previous state, revert the entire project back to a previous state, compare changes over time, see who modified something that might be causing a problem, who introduced an issue and when, and more

##### 6. Why are Git and Github useful for a team of developers?

- work together on a single project with the benefits of version control
