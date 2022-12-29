## provider-services query tx

Query for a transaction by hash, "<addr>/<seq>" combination or comma-separated signatures in a committed block

### Synopsis

Example:
$ <appd> query tx <hash>
$ <appd> query tx --type=acc_seq <addr>/<sequence>
$ <appd> query tx --type=signature <sig1_base64>,<sig2_base64...>

```
provider-services query tx --type=[hash|acc_seq|signature] [hash|acc_seq|signature] [flags]
```

### Options

```
      --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for tx
  -o, --output string   Output format (text|json) (default "text")
      --type string     The type to be used when querying tx, can be one of "hash", "acc_seq", "signature" (default "hash")
```

### Options inherited from parent commands

```
      --chain-id string   The network chain ID
      --node string       The node address (default "http://localhost:26657")
```

### SEE ALSO

* [provider-services query](provider-services_query.md)	 - Querying subcommands

###### Auto generated by spf13/cobra on 5-Dec-2022