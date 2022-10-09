import {JComponent} from "./JComponent"
import {JPanel} from "./JPanel"

export class JTabbedPane extends JComponent {

  private tabs = new Map<string, JPanel>()

  addTab(name: string, _param2: any, panel: JPanel, _title: string) {
    this.tabs.set(name, panel)
  }
}
