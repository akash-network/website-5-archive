## provider-services query distribution slashes

Query distribution validator slashes

### Synopsis

Query all slashes of a validator for a given block range.

Example:
$ <appd> query distribution slashes akashvalopervaloper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj 0 100

```
provider-services query distribution slashes [validator] [start-height] [end-height] [flags]
```

### Options

```
      --count-total       count total number of records in validator slashes to query for
      --height int        Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help              help for slashes
      --limit uint        pagination limit of validator slashes to query for (default 100)
      --offset uint       pagination offset of validator slashes to query for
  -o, --output string     Output format (text|json) (default "text")
      --page uint         pagination page of validator slashes to query for. This sets offset to a multiple of limit (default 1)
      --page-key string   pagination page-key of validator slashes to query for
      --reverse           results are sorted in descending order
```

### Options inherited from parent commands

```
      --chain-id string   The network chain ID
      --node string       The node address (default "http://localhost:26657")
```

### SEE ALSO

* [provider-services query distribution](provider-services_query_distribution.md)	 - Querying commands for the distribution module

###### Auto generated by spf13/cobra on 5-Dec-2022