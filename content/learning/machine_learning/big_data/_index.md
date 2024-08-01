---
# Leave the homepage title empty to use the site title
title: "Big Data"
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
- block: markdown
  content:
    text: |-
        <span style="font-family: palatino; font-size: 14px;">

        # Big Data

        ## Hadoop

        **Hadoop Distributed File System (HDFS)**: HDFS is designed to store data across multiple machines, providing high fault tolerance and easy scalability. It divides large data blocks into smaller blocks distributed across multiple nodes in a cluster, allowing for parallel processing. This parallelisation enables to exceed the storage capacity of any individual machine and also allows for failures of machines without compromising the system. 

        **MapReduce**: This is Hadoop’s processing module, which handles data processing by dividing the task into smaller parts, processing them in parallel across different nodes (Map phase), and then combining the results to produce the final output (Reduce phase).

        A set of machines running HDFS and MapReduce is called a *Hadoop cluster*, and the individual machines are known as *nodes*, or, more precisely, DataNodes. A group of nodes (usually between 30 and 50) connected to the same network switch is also known as *rack*, and a large Hadoop cluster consists of multiple racks.

        The syntax in the FS shell is very similar to the standard commands used in Unix shells:
        ```
        hadoop fs -ls # to list all the files in the user's home directory on HDFS
        hadoop fs -mkdir data # create a directory named data
        hadoop fs -cp data/testdata.txt testdata2.txt # copies the dataset testdata.txt from the directory data to the user home directory
        ```

        ## MapReduce

        The MapReduce paradigm is inspired by the map and reduce functions in Lisp. The map function takes a <key, value> pair as input and can return one or more <key, value> pairs as output. The shuffle and sort phase is executed across all the <key, value> pairs submitted, allowing keys from across the cluster to be sent to the same reducer. Shuffling refers to the process of transferring <key, value> pairs from the mappers to the reducers. These pairs are then sorted by key.

        The shuffle and sort phase is executed automatically in Hadoop MapReduce. Therefore, MapReduce is ideal for sorting large datasets (mapper is outputs <line,_ >, reducer is identity). MapReduce is also useful for searching (mapper finds matched patterns and outputs <line,_> if this is the case, reducer is identity).
        
        When possible, it is always recommended to use a combiner, which is a mini-reducer that is applied locally on the output of the map function to reduce the amount of data passed to the reducer.

        **Challenges:** 
        
        1. Disk-based Storage: Hadoop stores data on disks, which can be slower than memory storage, affecting the speed of data processing. (high I/O)
        2. Batch Processing: Hadoop processes data in batches, meaning it must complete one batch before starting another. This sequential dependency can lead to delays, as processes need to wait for the completion of preceding tasks.

        ## Apache Spark (2013)
        Resilient Distributed Datasets (RDDs): Spark introduces the concept of RDDs, an abstraction that lets programmers perform in-memory computations on large clusters in a fault-tolerant manner. RDDs are designed to be cached across computing nodes in a cluster, which drastically improves the speed of iterative algorithms and interactive data mining tasks. Spark can be up to 100 times faster than Hadoop when data is stored in memory; and up to 10 times faster when accessing disk.

        * **Driver Process**: The driver process runs the main() function of the application and is the central coordinator, analyzing the operations to perform and then distributing tasks to executors.
        * **Executors**: Executors are processes that run computations and store data for the application on worker nodes. Each executor runs multiple tasks in multiple threads.
        * **Spark Session**: The entry point for programming Spark applications. It's created by the Spark driver and allows the user to programmatically interact with the Spark cluster. Through a Spark session, dataframes can be manipulated, which are distributed collections of data, organized into named columns and partitioned across the cluster.

        **Dataframe Partitions**: Dataframes in Spark are distributed across different machines in a cluster. Each machine handles a slice or "partition" of the dataframe, allowing for distributed data processing and fault tolerance.

        Spark can be launched with *pyspark* command, which loades within the environment a SparkContext *sc* and SparkSession *spark*. SparkSession objects represent the entry point for programming with DataFrames.
        ```
        import pyspark
        sc = pyspark.SparkContext(appName='appName')
        from pyspark.sql import SparkSession
        spark = SparkSession.builder.appName('appName').getOrCreate()
        ```
        Actions return values to the driver after running a computation, or export data to a storage.
        The command *take(n)* is an action which returns the $n$ top rows from a single data partition.
        The command *reduce(func)* is an action which reduces the elements of an RDD using a function func in two arguments. The command *count()* returns the number of elements in the RDD.
        ```
        numbers.reduce(lambda x,y: x+y)
        poem.count()
        set.foreach(lambda x: print(x))
        ```

        Typically, DataFrames in PySpark are created using a SparkSession, mainly in two ways:
        1. From an existing RDD, using spark.createDataFrame, where spark is the default SparkSession in PySpark;
        2. Importing data from data sources in persistent memory.

        ML is Spark's machine learning library, which operates exclusively on DataFrames. Its predecessor MLlib only operates on RDDs.

        ML has three main abstract classes:
        * transformer: preprocess data
        * estimator: statistical models fitted on the observed data
        * pipeline: end-to-end combination of transformer and estimator to provide a complete framework for data analysis

---