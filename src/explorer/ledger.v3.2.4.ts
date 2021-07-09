import LedgerExplorer from './ledgerexplorer';

// an Live explorer V3 class
class LedgerV3Dot2Dot4 extends LedgerExplorer {
  constructor({ explorerURI, disableBatchSize }: { explorerURI: string; disableBatchSize?: boolean }) {
    super({ explorerURI, disableBatchSize });
    this.httpParams = {
      // eslint-disable-next-line @typescript-eslint/camelcase
      no_token: 'true',
    };
  }
}

export default LedgerV3Dot2Dot4;
