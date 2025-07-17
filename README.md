## Summary of Completed Tasks

---

### 🔧 **Task 1: Landing Page Migration**

- Migrated the customer's **custom React landing page** from the **legacy Sinch developer portal** to the **Redocly**.
- Updated both **Navbar** and **Footer** components to match the new design (⚠️ *not pixel-perfect*, per requirements).

**✅ Bonus:**
- Customized the **header and footer**:
  - Overwrote SCSS/variable values.
  - Added logos.
![screenshot 1](./images/screenshots/task%201.png)

---

### 🔧 **Task 2: Redocly Decorator – OpenAPI Extension**

- Implemented a **custom Redocly decorator** that injects an `x-updatedAt` property with the **current date** into every **OpenAPI operation**.

**✅ Bonus:**
- Successfully configured Redocly to **display the `x-updatedAt` extension** on the documentation page using the following setting:

```yaml
openapi:
  showExtensions: true
```
![screenshot 2](./images/screenshots/task%202.png)
